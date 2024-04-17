import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './MainPage.jsx'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/card/:id',
        element: (
            <div>
                <h1>Each card </h1>
                <Link to="/">Home</Link>
            </div>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
)
