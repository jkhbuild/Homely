# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 
require 'open-uri'
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Listing.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('listings')

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
    latitude: 40.71994934226182, 
    longitude: -73.8526353734643,
    owner_id: 1,
    description: "In the center of Forest Hills, Safe, quiet and nice neighborhood, close to all. walking distance to Austin street

10 mins walk to 71st ave Subway station.(E,F,V,G,R) and LIRR , express bus to Manhattan.

One block away to Grocery, laundry.

First floor walk-in of the private house. Has its own entrance.

Hardwood floor.

Spacious studio

Big separate eat-in kitchen.

New bathroom.

Gas, heat and water included. Pay your own electricity.

Non smokers only. no pets. Suitable for single professional/student or couple."
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
    latitude: 40.72983202509588, 
    longitude: -73.85018293017085,
    owner_id: 1,
    description: "Rental by owner. Sunny, spacious newly renovated corner 1-bedroom apartment in Forest Hills. SE/SW exposure for all day sun. Large living room with space for dining area and home office. Renovated and windowed bathroom and kitchen with brand new vanity, sink & Stainless Steel appliances. Steps to supermarket, shops and restaurants. 3 blocks from subway and Queens Boulevard. Laundry, storage and garage in building.

Co-op building, application fees apply, must meet income/credit requirements. No broker fee!"
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
    latitude: 40.72828400504672, 
    longitude: -73.84404379318016,
    owner_id: 1,
    description: "FOREST HILLS CORT MEYER 4 BEDROOMS 2.5 BATH HOME FOR RENT. CENTRALLY LOCATED CLOSE TO SHOPPING, BUSES, TRAINS TO MANHATTAN , AUSTIN SHOPS & HOUSE OF WORSHIPS. DISTRICT 28!!!"
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
    latitude: 40.72236692073384, 
    longitude: -73.84950805247979,
    owner_id: 1,
    description: "Welcome to this sun drenched beautifully renovated split 2-bedroom & 2 bath home with parquet floors throuout. The spacious eat-in-Kitchen has been renovated featuring Quartz countertops, stainless steel appliances, double windows and marble floors. Both bedrooms are master sized offering generous closet space,the master bedroom bath offers a stall shower, floor to celing tiles and a window.Gerard Towers offers a 24 Hour Doorman, a fitness center, seasonal heated pool, immediate valet parking, a kids playroom, storage & bike rooms. Just around the corner from Trendy Austin Street & Closet to express E & F trains, L.I.R.R, and The West Side Tennis Club!"
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
    latitude: 40.70418537620997, 
    longitude: -73.907779997001,
    owner_id: 1,
    description: "GUARANTORS ACCEPTED!!!!

Features include:
- Central Air
- Dishwasher
- Microwave
- Hardwood Floors
- Private Back Patio
- Video Intercom
- Stainless Steel Appliances
- Renovated Kitchen and Bathroom

Conveniently located just 2 blocks from the Seneca M stop, and a close walk to the Myrtle-Wyckoff L/M station!

For more info or to schedule a viewing,
please contact Karina"
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
  puts "Attaching Photos"
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo1.jpeg'), filename: 'photo1.jpeg')
  listing1.save!
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo2.jpeg'), filename: 'photo2.jpeg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo3.jpeg'), filename: 'photo3.jpeg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo4.jpeg'), filename: 'photo4.jpeg')
  listing3.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo5.jpeg'), filename: 'photo5.jpeg')
  listing3.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo6.jpeg'), filename: 'photo6.jpeg')
  listing4.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo7.jpeg'), filename: 'photo7.jpeg')
  listing4.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo8.jpg'), filename: 'photo8.jpg')
  listing5.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo9.jpeg'), filename: 'photo9.jpeg')
  listing5.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo10.jpeg'), filename: 'photo10.jpeg')

  puts "Done!"
# end