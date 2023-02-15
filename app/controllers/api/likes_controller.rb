class Api::LikesController < ApplicationController
    before_action :require_logged_in
    wrap_parameters include: Like.attribute_names + ['userId', 'listingId']
    
    def create
        @like = Like.new(likes_params)
        @like.user_id = current_user.id
        if @like.save
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @current_user = current_user
        @likes = Like.where(user_id: @current_user.id)

        if @likes
            render :index
        else
            render json: {errors: ['user has no likes']}, status: 404
        end
    end

    def destroy
         @like = Like.find(params[:id])
        if @like
            @like.destroy
        else
            render json: {errors: ['listing not liked']}, status: :unprocessable_entity
        end
    end

    private

    def likes_params
        params.require(:like).permit(:id, :listing_id)
    end
end
