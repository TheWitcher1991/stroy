import os
from pathlib import Path

import environ

env = environ.Env(DEBUG=(bool, False))

ENV_MODE = os.environ.get("ENV_MODE", default="development")

env_map = {
    "development": ".env.dev",
    "production": ".env.prod",
}

env_file = env_map.get(ENV_MODE, ".env.dev")

env_dir = Path(__file__).resolve().parent.parent

environ.Env.read_env(os.path.join(env_dir, env_file))

DEBUG = bool(env.bool("DJANGO_DEBUG", default=False))

PRODUCTION = ENV_MODE == "production"
