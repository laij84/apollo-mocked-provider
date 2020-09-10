import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../apollo/config'
import { booksQueryMock } from '../../apollo/mocks'

interface ProviderProps {
    useMocks?: boolean
}
export const Provider: React.FC<ProviderProps> = ({ useMocks, children }) => {
    if (useMocks)
        return (
            <MockedProvider mocks={[booksQueryMock]}>
                <>{children}</>
            </MockedProvider>
        )
    return (
        <ApolloProvider client={client}>
            <>{children}</>
        </ApolloProvider>
    )
}
