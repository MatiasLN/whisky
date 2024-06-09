FROM node:16.10.0-alpine
WORKDIR /app
COPY . /app
RUN yarn
RUN cd client && yarn install
RUN cd client && yarn run build
CMD yarn start
EXPOSE 5000