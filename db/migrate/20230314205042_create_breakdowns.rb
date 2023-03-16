class CreateBreakdowns < ActiveRecord::Migration[7.0]
  def change
    create_table :breakdowns do |t|
      t.belongs_to :dispatcher, null: false, foreign_key: true
      t.string :name
      t.string :address
      t.string :image
      t.string :phone_number
      t.string :description
      t.string :car_type

      t.timestamps
    end
  end
end
