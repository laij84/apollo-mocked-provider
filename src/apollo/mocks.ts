import * as Factory from 'factory.ts'
import faker from 'faker'
import { Book, Author, Query } from './types'
import { MockedResponse } from '@apollo/client/testing'
import { GET_BOOKS } from './queries'

export const AuthorMock = Factory.Sync.makeFactory<Author>({
    __typename: 'Author',
    id: Factory.each(() => faker.random.uuid()),
    firstName: Factory.each(() => faker.name.firstName()),
    lastName: Factory.each(() => faker.name.lastName()),
    avatarUrl: Factory.each(() => faker.image.avatar()),
})

export const BookMock = Factory.Sync.makeFactory<Book>({
    __typename: 'Book',
    id: Factory.each(() => faker.random.uuid()),
    publishDate: Factory.each(() => faker.date.past().toISOString()),
    title: Factory.each(() => faker.random.words()),
    author: Factory.each(() => AuthorMock.build()),
})

export const booksQueryMock: MockedResponse<Query> = {
    request: {
        query: GET_BOOKS,
    },
    result: {
        data: {
            books: BookMock.buildList(10),
        },
    },
}
