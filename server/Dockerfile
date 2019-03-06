FROM node:11.10

ENV NODE_ENV=development

WORKDIR /app/server

COPY ./server/package.json /app/server
COPY ./server/yarn.lock /app/server
RUN yarn install --frozen-lockfile --ignore-engines

RUN chown node:node /app/server
USER node
