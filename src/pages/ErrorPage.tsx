import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

const ErrorPage: React.FC = () => (
    <Container className="error" maxWidth="md" sx={{ height: '100vh' }}>
        <Stack alignItems="center" justifyContent="space-evenly" sx={{ height: '100%' }}>
            <Typography variant="h1" component="h1">
                Oops, something went wrong ...
            </Typography>
            <Button variant="outlined" component={Link} to="/">
                Go to home page
            </Button>
        </Stack>
    </Container>
)

export default ErrorPage
