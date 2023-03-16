class CreateBreakdownResponders < ActiveRecord::Migration[7.0]
  def change
    create_table :breakdown_responders do |t|
      t.belongs_to :responder, null: false, foreign_key: true
      t.belongs_to :breakdown, null: false, foreign_key: true

      t.timestamps
    end
  end
end
