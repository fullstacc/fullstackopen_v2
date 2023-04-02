# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY ./part1/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production-ready React app
RUN npm run build

# Expose port 3000 for the React app to listen on
EXPOSE 3000

# Start the React app
CMD [ "npm", "start" ]
