class Responder < ApplicationRecord
  belongs_to :dispatcher
  has_many :breakdown_responders
  has_many :breakdowns, through: :breakdown_responders
end
