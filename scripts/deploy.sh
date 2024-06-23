#!/bin/bash

# Deployment script for the application

echo "Starting deployment..."

# Pull the latest code
git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Restart the server
pm2 restart app

echo "Deployment completed."

# Monitor logs
echo "Monitoring logs..."
pm2 logs app