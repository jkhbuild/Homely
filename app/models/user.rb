class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :first_name, presence: { message: "*Please enter a first name" }
    validates :last_name, presence: { message: "*Please enter a last name" }
    validates :email, uniqueness: true, length: { in: 3..30, message: "*Please enter a valid email address" }, 
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "*Please enter a valid email address" }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 10, message: "*This value is too short. It should have 10 characters or more." }, allow_nil: true

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
