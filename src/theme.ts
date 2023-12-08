import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 35,
            lineHeight: 1.5,
            color: '#5e5e5e',
        },
        h2: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 1.5,
            color: '#5e5e5e',
        },
    },
    palette: {
        primary: {
            main: '#7bc522',
            light: '#95d04e',
            dark: '#568917',
        },
        secondary: {
            main: '#1dc1ca',
            light: '#4acdd4',
            dark: '#14878d',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'large',
            },
            styleOverrides: {
                root: {
                    borderRadius: '24px',
                },
                contained: {
                    color: '#fff',
                },
            },
        },
    },
})

export default responsiveFontSizes(theme)
