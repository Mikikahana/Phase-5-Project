class ResponderSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :available, :breakdowns
end
