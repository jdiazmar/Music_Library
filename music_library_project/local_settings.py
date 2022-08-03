# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-i^_#(c0y%c)ifz+pwh30ngez_r_%nzb4)lr-zofojdtkq*o+bh'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'music_library_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
    }
}