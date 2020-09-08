import React from 'react'
import { useQuery } from '@apollo/client'
import { Query } from '../../apollo/types'
import { GET_BOOKS } from '../../apollo/queries'

export const Books: React.FC = () => {
    const { data, loading, error } = useQuery<Query>(GET_BOOKS)
    console.log(data)

    if (error) return <p>{error.message}</p>
    if (loading) return <p>Loading...</p>
    if (data)
        return (
            <ul>
                {data.books.map((book) => (
                    <li>
                        <h2>{`${book.title}`}</h2>
                        <img src={book.author.avatarUrl} width="50px" height="50px" />
                        <p>{`by ${book.author.firstName} ${book.author.lastName}`}</p>
                    </li>
                ))}
            </ul>
        )
    return null
}
