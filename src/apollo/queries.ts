import gql from 'graphql-tag'

export const GET_BOOKS = gql`
    query getBooks {
        books {
            id
            title
            publishDate
            author {
                id
                firstName
                lastName
                avatarUrl
            }
        }
    }
`
