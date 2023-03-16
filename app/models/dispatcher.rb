class Dispatcher < ApplicationRecord
    has_many :breakdowns
    has_many :responders
    has_secure_password

end
