quick fullstack react/apollo/graphql/express/mongoose/mongodb app

server: https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate
client: https://github.com/the-road-to-graphql/fullstack-apollo-react-boilerplate

Quickstart

1. Create local mongo db

`mongod`
`mongo`
`use db_name`

2. Add env vars
```
echo "SECRET=goodboykent
DATABASE_URL=mongodb://localhost:27017/db_name" >> server/.env
echo "NODE_PATH=src/
SKIP_PREFLIGHT_CHECK=true" >> client/.env
```

3. Install ttab globally
`npm install -g ttab`

3. Install & start 
```
sh setup.sh
sh dev.sh
```


Todo
- [ ] server-side rendering
- [ ] seo ish
- [ ] code splitting
- [ ] ci