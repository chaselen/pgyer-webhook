FROM node:alpine
COPY . /app
RUN cd /app && npm install 
RUN npm run build
ENTRYPOINT [ "npm", "run", "start" ]