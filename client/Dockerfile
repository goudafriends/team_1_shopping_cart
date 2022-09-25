FROM node

WORKDIR /home/cartClient

COPY . .

RUN npm install

EXPOSE 1234

CMD ["npx", "parcel", "src/index.html"]

