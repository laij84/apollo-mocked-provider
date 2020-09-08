export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Query = {
    __typename?: 'Query'
    books: Array<Book>
}

export type Book = {
    __typename?: 'Book'
    id: Scalars['ID']
    title: Scalars['String']
    publishDate: Scalars['String']
    author: Author
}

export type Author = {
    __typename?: 'Author'
    id: Scalars['ID']
    firstName: Scalars['String']
    lastName: Scalars['String']
    avatarUrl: Scalars['String']
}
