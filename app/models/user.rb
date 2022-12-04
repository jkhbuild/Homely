class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token

    validates :email, uniqueness: true, length: {in: 3..30 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 10 }, allow_nil: true

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
