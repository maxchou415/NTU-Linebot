# Use Node version 8
FROM node:11

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
CMD npm rebuild && npm run prd 