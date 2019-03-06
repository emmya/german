FROM node:11.10

ENV NODE_ENV=development

WORKDIR /app/client

COPY ./client/package.json /app/client
COPY ./client/yarn.lock /app/client
RUN yarn install --frozen-lockfile --ignore-engines

RUN chown node:node /app/client
USER node
