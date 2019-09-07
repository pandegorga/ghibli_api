FROM node:8

# Optional: nodemon gives you superpowers to automatically restart
# your server whenever a file changes:
RUN npm install -g nodemon 
# Make directories to store the dependencies and the application code:
RUN mkdir -p /package
RUN mkdir -p /application
WORKDIR /application
# Set up the basics:
ENV PORT 8080
EXPOSE 8080
# Tell node where to find dependencies (they are not installed in the
# normal location
ENV NODE_PATH /package/node_modules
COPY package.json /package/package.json
RUN npm install --prefix /package
# Copy the application
COPY . /application
# By default, run the application with node:
CMD [ "npm","run", "watch" ]