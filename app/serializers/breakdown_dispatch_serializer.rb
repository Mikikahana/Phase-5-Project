class BreakdownDispatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :address, :image, :description, :car_type
  has_one :dispatcher
end
