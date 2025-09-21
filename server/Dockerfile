# Use official Node.js image (lightweight alpine version)
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (leverage Docker caching)
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose port (adjust if your app runs on another port)
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
