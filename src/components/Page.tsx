import React from 'react'
import { Stack, Container, useMediaQuery, useTheme } from '@mui/material'
import Header from './Header'

interface PageProps {
    children: JSX.Element | JSX.Element[]
}

const Page: React.FC<PageProps> = ({ children }) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Stack sx={{ background: '#FCFAF9', pb: { xs: 10, md: 20 }, minHeight: '100vh', width: '100vw' }}>
            <Header />
            <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 10.5 } }} disableGutters={isDesktop}>
                {children}
            </Container>
        </Stack>
    )
}

export default Page
