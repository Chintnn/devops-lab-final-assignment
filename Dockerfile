FROM alpine:3.20
RUN apk add --no-cache nodejs
WORKDIR /app
COPY app/ .
EXPOSE 3000
CMD ["node", "index.js"]