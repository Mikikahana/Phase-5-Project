ActiveRecord::Schema[7.0].define(version: 2023_03_15_200236) do
  create_table "breakdown_responders", force: :cascade do |t|
    t.integer "responder_id", null: false
    t.integer "breakdown_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["breakdown_id"], name: "index_breakdown_responders_on_breakdown_id"
    t.index ["responder_id"], name: "index_breakdown_responders_on_responder_id"
  end

  create_table "breakdowns", force: :cascade do |t|
    t.integer "dispatcher_id", null: false
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
    t.integer "dispatcher_id", null: false
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
