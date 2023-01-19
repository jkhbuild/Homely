class Api::LikesController < ApplicationController
    before_action :require_logged_in
    wrap_parameters include: Like.attribute_names + ['userId', 'listingId']
    
    def create
        @like = Like.new(likes_params)
        @like.user_id = current_user.id

        if @like.save
            render index
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
        # like = Like.new(like_params)
        # if like.save
        #     @like = Like.where(user_id: like.user_id)
        #     render :index
        # else
        #     render json { error: 'test error'}
        # end
    end

    def index
        # @likes = Like.where(user_id: params[:user_id])
        # render :index
        @current_user = current_user
        @likes = Like.where(user_id: @current_user.id)

        if @likes
            render :index
        else
            render json: {errors: ['user has no likes']}, status: 404
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, listing_id: params[:id])
        if @like
            @like.destroy
        else
            render json: {errors: ['listing not liked']}, status :unprocessable_entity
        end
        # like = Like.find_by(id: params[:id])
        # like.delete
    end

    private

    def already_liked?
        Like.where(user_id: current_user.id, listing_id: params[:listing_id]).exists?
    end

    def likes_params
        params.require(:like).permit(:listing_id)
    end
end
