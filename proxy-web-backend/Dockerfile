FROM node:16-alpine AS build
# https://hub.docker.com/layers/library/node/16-alpine/images/sha256-34d5b3bc90f9beb47e7eb14c17837c9d393eb2524b34c9421b1d675ba05b69b2?context=explore


WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build && npm prune --production

# https://hub.docker.com/layers/library/node/16-alpine/images/sha256-34d5b3bc90f9beb47e7eb14c17837c9d393eb2524b34c9421b1d675ba05b69b2?context=explore
FROM node:16-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 15000
CMD [ "node", "dist/main.js" ]