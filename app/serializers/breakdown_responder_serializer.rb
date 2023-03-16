class BreakdownResponderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :responder
  has_one :breakdown
end
