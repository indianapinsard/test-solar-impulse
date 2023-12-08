import React from 'react'
import { Stack, Typography } from '@mui/material'

import { useListProjectsQuery } from '../app/api'
import Page from '../components/Page'
import ProjectCard from '../components/ProjectCard'
import LoadingPage from './LoadingPage'

function HomePage(): JSX.Element {
    const { data: projects, isLoading, isError } = useListProjectsQuery()

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <Page>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Vos projets
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
                Cliquer sur un projet pour accéder au détails de sa consommation énergétique.
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                spacing={3}
                sx={{ '& > *': { flex: 1 } }}
            >
                {projects!.map((project) => (
                    <ProjectCard key={project.uuid} {...project} />
                ))}
            </Stack>
        </Page>
    )
}

export default HomePage
