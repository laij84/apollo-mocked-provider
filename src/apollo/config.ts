import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { schemaLink } from './schema'

export const cache = new InMemoryCache()

export const client = new ApolloClient({
    connectToDevTools: true,
    link: ApolloLink.from([(schemaLink as unknown) as ApolloLink]),
    cache,
    resolvers: {},
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
    },
})
