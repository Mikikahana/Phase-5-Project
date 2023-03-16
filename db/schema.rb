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

ActiveRecord::Schema[7.0].define(version: 2023_03_15_200236) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "breakdown_responders", force: :cascade do |t|
    t.bigint "responder_id", null: false
    t.bigint "breakdown_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["breakdown_id"], name: "index_breakdown_responders_on_breakdown_id"
    t.index ["responder_id"], name: "index_breakdown_responders_on_responder_id"
  end

  create_table "breakdowns", force: :cascade do |t|
    t.bigint "dispatcher_id", null: false
    t.string "name"
    t.string "address"
    t.string "image"
    t.string "phone_number"
    t.string "description"
    t.string "car_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dispatcher_id"], name: "index_breakdowns_on_dispatcher_id"
  end

  create_table "dispatchers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responders", force: :cascade do |t|
    t.bigint "dispatcher_id", null: false
    t.string "name"
    t.float "distance"
    t.boolean "available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dispatcher_id"], name: "index_responders_on_dispatcher_id"
  end

  add_foreign_key "breakdown_responders", "breakdowns"
  add_foreign_key "breakdown_responders", "responders"
  add_foreign_key "breakdowns", "dispatchers"
  add_foreign_key "responders", "dispatchers"
end
