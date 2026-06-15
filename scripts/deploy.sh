#!/bin/bash


ENV=${1:dev}
echo "Deploying to $ENV environment"

docker compose down
docker compose build
docker compose up -d

echo "Deployment complete"
