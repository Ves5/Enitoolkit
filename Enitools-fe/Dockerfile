# Use an official Node runtime as a parent image
FROM node:18-alpine as build
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code to the working directory
COPY . .
# Build the Angular application
RUN npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/enitools-fe /usr/share/nginx/html
EXPOSE 80