# Dockerfile
FROM node:18

WORKDIR /app

# Create a non-root user and group
RUN groupadd -r nodeuser && useradd -r -g nodeuser nodeuser

# Copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Change ownership of the /app directory to the non-root user
RUN chown -R nodeuser:nodeuser /app

# Switch to non-root user
USER nodeuser

EXPOSE 3000

CMD ["node", "index.js"]
