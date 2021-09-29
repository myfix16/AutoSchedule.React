FROM node:latest
WORKDIR /user/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["yarn", "start"]