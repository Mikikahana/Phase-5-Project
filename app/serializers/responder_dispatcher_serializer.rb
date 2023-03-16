class ResponderDispatcherSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :dispatcher
end
