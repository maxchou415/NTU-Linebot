# Use Node version 16 Alpine
FROM node:16-alpine3.11

# Set environment as 'Production'
ENV NODE_ENV production

# Project DIR
WORKDIR /usr/src/app/line-bot-receive-endpoint

# Copy package config
COPY ["package.json", "./"]

# Install modules and move to DIR node_modules
RUN npm install && mv node_modules ../

# Copy Project files
COPY . .

# Service Public Port
EXPOSE 5000

# Run the project
CMD npm run prod 