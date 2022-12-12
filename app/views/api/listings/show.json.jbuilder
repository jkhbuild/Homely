json.listing do
  json.extract! @listing, :id, :address, :zip_code, :city, :state, :has_multiple_units, :property_type, :beds, :baths, :available_on, :rent, :deposit, :sf, :unit, :description, :longitude, :latitude, :is_published, :owner_id
end