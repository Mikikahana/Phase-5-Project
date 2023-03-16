class Breakdown < ApplicationRecord
  belongs_to :dispatcher
  has_many :breakdown_responders
  has_many :responders, through: :breakdown_responders
end
