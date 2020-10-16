FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install --production
RUN npm run tsc
ENTRYPOINT [ "npm", "run", "start" ]