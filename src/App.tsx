import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import routes from './routes'
import theme from './theme'
import store from './app/store'

function App() {
    const router = createBrowserRouter(routes)
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    )
}

export default App
