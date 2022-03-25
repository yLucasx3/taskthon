import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 3333,
  graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/graphql-starter'
}