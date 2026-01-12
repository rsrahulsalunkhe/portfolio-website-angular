# Use Node 22 (Compatible with Angular 18/19/20)
FROM node:22-alpine

WORKDIR /app

# Copy package files first to optimize build caching
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Install Angular CLI globally in the container
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose port 4200 (Default Angular port)
EXPOSE 4200

# Start command with host 0.0.0.0 to make it accessible outside
# --poll is used to ensure hot-reloading works on Windows
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]