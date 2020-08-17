FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install --production
ENTRYPOINT [ "npm", "run", "start" ]