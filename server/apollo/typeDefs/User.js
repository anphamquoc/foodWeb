const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
  scalar DateTime
  type User {
    id: ID
    username: String
    password: String
    hoten: String
    diachi: String
    sodt: String
    ngdk: DateTime
  }

  type AuthData {
    userId: ID
    token: String
    tokenExpiration: Int
  }

  input UserInput {
    username: String!
    password: String!
    hoten: String
    diachi: String
    sodt: String
  }
`;

module.exports = userTypeDefs;
