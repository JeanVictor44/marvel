import {
    createBrowserRouter,
    Navigate,
    redirect,
    Route
} from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path:"/characters",
            },
            {
                path:'/series'
            },
            {
                path:'/comics'
            },

            {
                path:'/characters/:id'
            },
            {
                path:'/series/:id'
            },
            {
                path: '/comics/:id'
            }
        ]
    }
])