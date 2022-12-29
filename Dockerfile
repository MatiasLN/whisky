		FROM node:16.10.0-alpine
		WORKDIR /app
        COPY ./client /app/client
		COPY ./package.json /app
		COPY ./yarn.lock /app
		COPY ./index.js /app
		COPY ./productScraper.js /app
		COPY ./searchScraper.js /app
		RUN yarn
		RUN cd client && yarn install
		RUN cd client && yarn run build
        CMD yarn start
        EXPOSE 5000