import {
    createBrowserRouter,
    Navigate,
    redirect,
    Route
} from 'react-router-dom'
import { CharacterDetails } from './components/CharacterDetails'
import { CharactersGrid } from './components/CharactersGrid'
import { ComicsDetails } from './components/ComicsDetails'
import { ComicsGrid } from './components/ComicsGrid'
import App from './layout/App'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App />,
        children: [
            {
                path:"/",
                element:<CharactersGrid  cardsAmount={14}/>
            },
            {
                path:'/series'
            },
            {
                path:'/comics',
                element: <ComicsGrid comicsAmount={10} />
            },

            {
                path:'/characters/:id',
                element: <CharacterDetails />
            },
            {
                path:'/series/:id'
            },
            {
                path: '/comics/:id',
                element: <ComicsDetails />
            }
        ]
    }
])