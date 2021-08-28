import { gql } from 'apollo-server'

export const typeDefs = gql`
  # comment 1
  type User {
    id: Int
    email: String
    name: String
  }

  type Query {
    users: [User]
  }
`
