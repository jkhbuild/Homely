# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_professional :boolean          not null
#  role            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :first_name, presence: { message: "*Please enter a first name" }
    validates :last_name, presence: { message: "*Please enter a last name" }
    validates :email, uniqueness: true, length: { in: 3..30, message: "*Please enter a valid email address" }, 
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "*Please enter a valid email address" }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 10, message: "*This value is too short. It should have 10 characters or more." }, allow_nil: true

    has_many :listings,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Listing,
    dependent: :destroy

    has_many :likes,
    dependent: :destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
