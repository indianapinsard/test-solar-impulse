import React from 'react'
import { Stack, CircularProgress } from '@mui/material'
import Page from '../components/Page'

const LoadingPage: React.FC = () => (
    <Page>
        <Stack alignItems="center" justifyContent="center" sx={{ width: '100%', height: '500px' }}>
            <CircularProgress />
        </Stack>
    </Page>
)

export default LoadingPage
