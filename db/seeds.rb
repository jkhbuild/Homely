# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  demo = User.create!(
    email: 'demo@user.io', 
    password: 'passwordpassword',
    first_name: 'demo',
    last_name: 'user',
    is_professional: true
  )

  user1 = User.create!(
    email: 'bonbunny@gmail.com',
    password: 'passwordpassword',
    first_name: 'bonnie',
    last_name: 'li',
    is_professional: false
  )

  user2 = User.create!(
    email: 'jcheng@gmail.com',
    password: 'passwordpassword',
    first_name: 'jeffrey',
    last_name: 'cheng',
    is_professional: true
  )

  puts "Creating Listings"

  listing1 = Listing.create!(
    address: "6802 Dartmouth St",
    zip_code: 11375,
    city: "Forest Hills",
    state: "NY",
    has_multiple_units: false,
    property_type: "Single Family House",
    beds: 1.0,
    baths: 1.0,
    rent: 1800,
    deposit: 1800,
    sf: 700,
    is_published: true,
    owner_id: 1
  )

  listing2 = Listing.create!(
    address: "6545 Yellowstone Blvd Unit 3B",
    zip_code: 11375,
    city: "Forest Hills",
    state: "NY",
    has_multiple_units: true,
    property_type: "Apartment",
    beds: 1.0,
    baths: 1.0,
    rent: 2200,
    deposit: 2200,
    sf: 850,
    is_published: true,
    owner_id: 1
  )
  listing3 = Listing.create!(
    address: "110-14 67th Dr",
    zip_code: 11375,
    city: "Central Queens",
    state: "NY",
    has_multiple_units: false,
    property_type: "Single Family House",
    beds: 4.0,
    baths: 3.0,
    rent: 5500,
    deposit: 5500,
    sf: 850,
    is_published: true,
    owner_id: 1,
  )
  listing4 = Listing.create!(
    address: "70-25 Yellowstone Blvd",
    zip_code: 11375,
    city: "Queens",
    state: "NY",
    has_multiple_units: false,
    property_type: "Condominium",
    beds: 2.0,
    baths: 2.0,
    rent: 3200,
    deposit: 3200,
    sf: 850,
    unit: "7M",
    is_published: true,
    owner_id: 1
  )
  listing5 = Listing.create!(
    address: "664 Onderdonk Ave",
    zip_code: 11385,
    city: "Ridgewood",
    state: "NY",
    has_multiple_units: false,
    property_type: "House",
    beds: 3.0,
    baths: 1.0,
    rent: 3500,
    deposit: 3500,
    sf: 1000,
    is_published: true,
    owner_id: 1
  )

  # More users
  # 10.times do 
  #   User.create!({
  #     email: Faker::Internet.unique.email,
  #     password: 'passwordpassword',
  #     first_name: 'first',
  #     last_name: 'last',
  #     is_professional: 'false'
  #   }) 
  # end

  puts "Done!"
end