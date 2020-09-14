import { SchemaLink } from '@apollo/client/link/schema'
import { makeExecutableSchema } from '@graphql-tools/schema'

import gql from 'graphql-tag'

const typeDefs = gql`
    type Query {
        books: [Book!]!
    }

    type Book {
        id: ID!
        title: String!
        publishDate: String!
        author: Author!
    }

    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        avatarUrl: String!
    }
`
export const schemaLink = new SchemaLink({ schema: makeExecutableSchema({ typeDefs }) })
