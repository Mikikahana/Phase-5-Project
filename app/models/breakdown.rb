class Breakdown < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :image, presence: true
  validates :phone_number, presence: true
  validates :description, presence: true
  validates :car_type, presence: true
  belongs_to :dispatcher
  has_many :breakdown_responders
  has_many :responders, through: :breakdown_responders
end
