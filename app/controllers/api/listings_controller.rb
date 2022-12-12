class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names + ['address', 'zipCode', 'city', 'state', 'hasMultipleUnits', 'propertyType', 'beds', 'baths', 'availableOn', 'rent', 'deposit', 'sf', 'unit', 'description', 'longitude', 'latitude', 'isPublished']
    def index
        listings = Listing.all
        render json: listings
    end

    def show
        @listing = Listing.find_by(id: [params[:id]])
    end

    def create
        @listing = Listing.new(listings_params)
        @listing.owner_id = current_user.id

        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listings_params)
            @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
        end
    end

    
    private
    def listings_params
        params.require(:listing).permit(
            :id,
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
