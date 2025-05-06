from packages.utils import jwt_decode, jwt_encode, jwt_is_valid


class JWTService:

    @staticmethod
    def sign(user) -> dict:
        access_token, access_token_expires = jwt_encode(user)
        refresh_token, refresh_token_expires = jwt_encode(user, is_refresh=True)

        data = {
            "user": user,
            "refresh_token": refresh_token,
            "access_token": access_token,
            "session_expires": refresh_token_expires.timestamp(),
            "access_expires": access_token_expires.timestamp(),
        }

        return data

    @staticmethod
    def refresh(user):
        access_token, access_token_expires = jwt_encode(user)

        data = {
            "access_token": access_token,
            "access_expires": access_token_expires.timestamp(),
        }

        return data

    @staticmethod
    def decode(token):
        return jwt_decode(token)

    @staticmethod
    def verify(token) -> bool:
        return jwt_is_valid(token)

    @staticmethod
    def authenticate(token: str):
        from users.repository import UserRepository

        payload = jwt_decode(token)

        user = UserRepository.get_by_id(int(payload.get("user_id")))

        return {
            "user": user,
            "token": token,
        }
