# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  address        :string           not null
#  zip_code       :integer          not null
#  city           :string           not null
#  state          :string           not null
#  multiple_units :boolean          not null
#  property_type  :string           not null
#  beds           :float            not null
#  baths          :float            not null
#  available_on   :date
#  rent           :integer
#  deposit        :integer
#  sf             :integer
#  unit           :string
#  description    :string
#  longitude      :float
#  latitude       :float
#  published      :boolean          default(FALSE)
#  owner_id       :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Listing < ApplicationRecord
    validates :address, :multiple_units, :property_type, :beds, :baths, :available_on, :rent, :sf, presence: true
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
