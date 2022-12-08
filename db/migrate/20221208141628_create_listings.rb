class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.integer :zip_code, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.boolean :has_multiple_units, null:false
      t.string :property_type, null: false
      t.float :beds, null: false
      t.float :baths, null: false
      t.date :available_on
      t.integer :rent
      t.integer :deposit
      t.integer :sf
      t.string :unit
      t.string :description
      t.float :longitude
      t.float :latitude
      t.boolean :is_published, default: false
      t.bigint :owner_id

      t.timestamps
    end
    add_index :listings, :owner_id
    add_index :listings, :address
    add_index :listings, :city
    add_index :listings, :state
    add_index :listings, :zip_code

    add_foreign_key :listings, :users, column: :owner_id, primary_key: :id
  end
end
