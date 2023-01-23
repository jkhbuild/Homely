require 'open-uri'

class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names + ['address', 'zipCode', 'city', 'state', 'hasMultipleUnits', 'propertyType', 'beds', 'baths', 'availableOn', 'rent', 'deposit', 'sf', 'unit', 'description', 'longitude', 'latitude', 'isPublished']
    def index
        user_id = params[:user_id]
        if user_id
            @listings = Listing.where(owner_id: user_id)
        else
            query = params[:query].downcase if params[:query]
            @listings = Listing.all
            if query
                @listings = Listing.where("lower(state) LIKE (?)", query )
                .or(Listing.where("lower(city) LIKE (?)", query ))
                .or(Listing.where(zip_code: query))
            end
        end
        render :index
    end

    def show
        @listing = Listing.find_by(id: [params[:id]])
    end

    def create
        @listing = Listing.new(listings_params)
        @listing.owner_id = current_user.id
        @listing.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Default/defaultimage.jpeg'), filename: 'defaultimage.jpeg')

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
