# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  address        :string           not null
#  zipcode        :integer          not null
#  city           :string
#  state          :string
#  postal_code    :string
#  multiple_units :boolean          not null
#  property_type  :string           not null
#  beds           :float            not null
#  baths          :float            not null
#  available_on   :date             not null
#  rent           :integer          not null
#  deposit        :integer
#  sf             :integer          not null
#  unit           :string
#  description    :string
#  longitude      :float
#  latitude       :float
#  overview       :string
#  owner_id       :bigint           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Listing < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
