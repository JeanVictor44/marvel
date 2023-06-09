import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
