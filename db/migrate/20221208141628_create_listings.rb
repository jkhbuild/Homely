class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.integer :zipcode
      t.string :city
      t.string :state
      t.string :postal_code
      t.boolean :multiple_units, null:false
      t.string :property_type, null: false
      t.float :beds, null: false
      t.float :baths, null: false
      t.date :available_on, null: false
      t.integer :rent, null: false
      t.integer :deposit
      t.integer :sf, null: false
      t.string :unit
      t.string :description
      t.float :longitude
      t.float :latitude
      t.string :overview
      t.bigint :owner_id, null: false

      t.timestamps
    end
    add_index :listings, :owner_id

    add_foreign_key :listings, :users, column: :owner_id, primary_key: :id
  end
end
