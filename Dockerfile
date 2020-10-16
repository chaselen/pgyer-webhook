FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run tsc
ENTRYPOINT [ "npm", "run", "start" ]