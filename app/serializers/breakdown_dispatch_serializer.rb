class BreakdownDispatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :address, :image, :description, :car_type, :responders
  has_one :dispatcher
end
