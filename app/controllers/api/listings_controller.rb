class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listings_params)
        @listing.owner_id = params[:user_id]

        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private
    def listings_params
        params.require(:listing).permit(
            :address,
            :zip_code,
            :city,
            :state,
            :has_multiple_units,
            :property_type,
            :beds,
            :baths,
            :available_on,
            :rent,
            :deposit,
            :sf,
            :unit,
            :description,
            :longitude,
            :latitude,
            :is_published
        )
    end
end
