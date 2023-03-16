class CreateResponders < ActiveRecord::Migration[7.0]
  def change
    create_table :responders do |t|
      t.belongs_to :dispatcher, null: false, foreign_key: true
      t.string :name
      t.float :distance
      t.boolean :available

      t.timestamps
    end
  end
end
