#!/bin/bash

### Configuration ###

APP_DIR=/var/www/grenn-server
GIT_URL=https://github.com/GrennStats/grenn-server.git

# Pull latest code
if [[ -e $APP_DIR ]]; then
  cd $APP_DIR
  git pull origin
else
  git clone $GIT_URL $APP_DIR
  cd $APP_DIR
fi

# Install dependencies
npm prune
npm install


./node_modules/.bin/forever stopall
npm run prestart:prod
npm run start:prod

