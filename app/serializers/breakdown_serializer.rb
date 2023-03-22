class BreakdownSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :car_type, :dispatcher_id
end
