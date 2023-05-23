FROM nginx:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose a port that the application listens on
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]
