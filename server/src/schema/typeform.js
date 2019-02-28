import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    responses: String!
    response(email: String!): String!
  }
`;
