import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './MainPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './main.css'
import { CardPage } from './CardPage.js'

const router = createBrowserRouter([
    {
        path: '/tarot-th/',
        element: <MainPage />,
    },
    {
        path: '/tarot-th/card/:id',
        element: <CardPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)
