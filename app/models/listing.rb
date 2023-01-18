# == Schema Information
#
# Table name: listings
#
#  id                 :bigint           not null, primary key
#  address            :string           not null
#  zip_code           :integer          not null
#  city               :string           not null
#  state              :string           not null
#  has_multiple_units :boolean          not null
#  property_type      :string           not null
#  beds               :float            not null
#  baths              :float            not null
#  available_on       :date
#  rent               :integer
#  deposit            :integer
#  sf                 :integer
#  unit               :string
#  description        :string
#  longitude          :float
#  latitude           :float
#  is_published       :boolean          default(FALSE)
#  owner_id           :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Listing < ApplicationRecord
    validates :address, :zip_code, :city, :state, :property_type, :beds, :baths, presence: true
    validates :has_multiple_units, :inclusion => {:in => [true, false]}
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    has_many :likes,
    dependent: :destroy

    has_many_attached :photos
end
