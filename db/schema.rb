# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_08_141628) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "address", null: false
    t.integer "zip_code", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.boolean "has_multiple_units", null: false
    t.string "property_type", null: false
    t.float "beds", null: false
    t.float "baths", null: false
    t.date "available_on"
    t.integer "rent"
    t.integer "deposit"
    t.integer "sf"
    t.string "unit"
    t.string "description"
    t.float "longitude"
    t.float "latitude"
    t.boolean "is_published", default: false
    t.bigint "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_listings_on_address"
    t.index ["city"], name: "index_listings_on_city"
    t.index ["owner_id"], name: "index_listings_on_owner_id"
    t.index ["state"], name: "index_listings_on_state"
    t.index ["zip_code"], name: "index_listings_on_zip_code"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "is_professional", null: false
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "listings", "users", column: "owner_id"
end
