class Api::LikesController < ApplicationController
    wrap_parameters include: Like.attribute_names + ['userId', 'listingId']
    
    def create
        @like = current_user.likes.new(like_params)

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
        @likes = Like.where(user_id: params[:user_id])
        render :index
    end

    def destroy
        like = current_user.likes.find(params[:id])
        like.destroy
        # like = Like.find_by(id: params[:id])
        # like.delete
    end

    private

    def already_liked?
        Like.where(user_id: current_user.id, listing_id: params[:listing_id]).exists?
    end

    def likes_params
        params.require(:like).permit(:user_id, :listing_id)
    end
end
