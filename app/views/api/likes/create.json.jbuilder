json.like do
    json.extract! @like, :id, :user_id, :listing_id
end