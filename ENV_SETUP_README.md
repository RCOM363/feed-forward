# Environment Variables Setup

This project has been configured to use system environment variables instead of .env files.

## Environment Variables

The following environment variables are now set on the EC2 machine:

- `PORT=5000`
- `MONGODB_URL` - MongoDB connection string
- `CORS_ORIGIN` - CORS origin for the API
- `ADMIN_EMAIL` - Admin email address
- `TOKEN_SECRET` - JWT token secret
- `EMAIL_USER` - Email service username
- `EMAIL_APP_PASS` - Email service app password
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `VITE_API_URL` - Frontend API URL (environment-dependent)

## Usage

### Production Environment
```bash
source ./set-env-vars.sh prod
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Development Environment
```bash
source ./set-env-vars.sh dev
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Default Environment
```bash
source ./set-env-vars.sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Notes

- Environment variables are automatically loaded from `~/.bashrc` on new shell sessions
- Original .env files have been backed up as `.env.backup`
- Docker-compose files have been updated to use environment variables instead of env_file
- The `set-env-vars.sh` script allows switching between different environment configurations

## Backup Files

- `docker-compose.prod.yml.backup` - Original production compose file
- `docker-compose.dev.yml.backup` - Original development compose file
- `backend/.env.backup` - Original backend environment file
