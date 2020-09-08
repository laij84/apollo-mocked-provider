import React from 'react'
import { Books } from './components/Books/Books'
import { Provider } from './components/Provider/Provider'

export const App = () => {
    return (
        <Provider useMocks>
            <Books />
        </Provider>
    )
}
