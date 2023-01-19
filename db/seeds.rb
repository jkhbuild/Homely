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
  Like.destroy_all

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
    address: "6545 Yellowstone Blvd",
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
    unit: "3B",
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
  listing6 = Listing.create!(
    address: "6120 Grand Central Pky",
    zip_code: 11375,
    city: "Forest Hills",
    state: "NY",
    has_multiple_units: true,
    property_type: "Condominium",
    beds: 2.0,
    baths: 1.0,
    rent: 2800,
    deposit: 2800,
    sf: 1100,
    unit: "C1003",
    is_published: true,
    latitude: 40.73896714708223,
    longitude: -73.846107112731,
    owner_id: 1,
    description: "12 Month Lease, $2,800 deposit, Available Now
A must see 2 bedroom apartment for sale in Forest Hills NY. Astonishing lake views, along with serene park views from the balcony and bedrooms alike. The unit is updated and has gorgeous parquet floors. The building offers gas, electric, water, central a/c included in the monthly maintenance. In addition, the building offers a 24 hour doorman along with private security. A must see. The Fairview is a 24-hour doorman building in Forest Hills, New York. It is also a pet friendly building. The buildings amenities include a 24- hour doorman, swimming pool, central a/c and has gas, electric, water, heat & taxes included in the monthly rent. Also, the building is located approximately 52 minutes from Manhattan via public transportation. Above all, just across the street residents can play tennis, basketball, play volleyball and run track and field. In addition, your only minutes away from Citi field, home to the New York Mets baseball team and the US Open Billy Jean King tennis stadium. Hurry, this unit won’t last….

* Prices and availability subject to change without notice.
* Square footage definitions vary. Displayed square footage is approximate."
  )
  listing7 = Listing.create!(
    address: "9022 70th Dr",
    zip_code: 11375,
    city: "Forest Hills",
    state: "NY",
    has_multiple_units: true,
    property_type: "Apartment",
    beds: 2.0,
    baths: 1.0,
    rent: 2300,
    deposit: 2300,
    sf: 900,
    is_published: true,
    latitude: 40.709442341121836,
    longitude: -73.85195407045889,
    owner_id: 1,
    description: "12 Month Lease, $2,300 deposit, Available Now
* Prices and availability subject to change without notice.
* Square footage definitions vary. Displayed square footage is approximate.
Come home to this great property in Forest Hills, NY. This apartment unit for rent can be found at 9022 70th Dr in Forest Hills. Stop searching and get to moving. Let us assist you! Contact us now to talk about this home!

9022 70th Dr is an apartment community located in Queens County and the 11375 ZIP Code."
    )

    listing8 = Listing.create!(
    address: "7318 Yellowstone Blvd Unit",
    zip_code: 11375,
    city: "Forest Hills",
    state: "NY",
    has_multiple_units: true,
    property_type: "Apartment",
    beds: 1.0,
    baths: 1.0,
    rent: 2300,
    deposit: 2300,
    sf: 900,
    is_published: true,
    latitude: 40.71724760848824, 
    longitude: -73.85758316096278,
    owner_id: 1,
    description: "12 Month Lease, $2,300 deposit, Available Now
Brand New Construction Building 1 Bedroom with + Built in Home Office/Nursery Large Living Area XL Kitchen King Size Bedrooms Master Bathroom Indoor Parking $150 extra Outdoor Parking $125 Extra Washer Dryer in Building Lease Date starts 9/1 Must have good Credit and Income

* Prices and availability subject to change without notice.
* Square footage definitions vary. Displayed square footage is approximate. Brand New Construction Building
1 Bedroom with + Built in Home Office/Nursery. Large Living Area
XL Kitchen. King Size Bedrooms. Master Bathroom. Indoor Parking $150 extra
Outdoor Parking $125 Extra. Washer Dryer in Building. Lease Date starts 9/1"
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
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo11.jpg'), filename: 'photo11.jpg')
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo12.jpg'), filename: 'photo12.jpg')
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo13.jpg'), filename: 'photo13.jpg')
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo14.jpg'), filename: 'photo14.jpg')
  listing1.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo21.jpg'), filename: 'photo21.jpg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo16.jpg'), filename: 'photo16.jpg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo17.jpg'), filename: 'photo17.jpg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo18.jpg'), filename: 'photo18.jpg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo19.jpg'), filename: 'photo19.jpg')
  listing2.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos2/photo20.jpg'), filename: 'photo20.jpg')
  listing3.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo5.jpeg'), filename: 'photo5.jpeg')
  listing3.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo6.jpeg'), filename: 'photo6.jpeg')
  listing4.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo7.jpeg'), filename: 'photo7.jpeg')
  listing4.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo8.jpg'), filename: 'photo8.jpg')
  listing5.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo9.jpeg'), filename: 'photo9.jpeg')
  listing5.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo10.jpeg'), filename: 'photo10.jpeg')
  listing6.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo1.jpeg'), filename: 'photo1.jpeg')
  listing6.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo2.jpeg'), filename: 'photo2.jpeg')
  listing7.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo3.jpeg'), filename: 'photo3.jpeg')
  listing8.photos.attach(io: URI.open('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo4.jpeg'), filename: 'photo4.jpeg')
  puts "Done!"
# end