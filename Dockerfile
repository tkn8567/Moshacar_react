FROM --platform=linux/x86_64 node:lts-alpine

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]
