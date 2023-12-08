import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Page from '../components/Page'
import { useGetProjectQuery, useListProjectsQuery } from '../app/api'
import LoadingPage from './LoadingPage'
import { Box, Breadcrumbs, Grid, Stack, Typography } from '@mui/material'
import { formatChartData } from '../utils/formatData'
import ConsumptionChart from '../components/ConsumptionChart'
import { Dayjs } from 'dayjs'
import StatisticsCard from '../components/StatisticsCard'
import DateRangePicker from '../components/DateRangePicker'
import { ConsumptionUnity } from '../interfaces'
import Select from '../components/Select'
import { Link } from 'react-router-dom'
import { HOME_URL } from '../routes'
import { ArrowBack } from '@mui/icons-material'

const ProjectPage: React.FC = () => {
    const { uuid } = useParams()
    const [startDate, setStartDate] = useState<Dayjs | null>(null)
    const [endDate, setEndDate] = useState<Dayjs | null>(null)
    const [unity, setUnity] = useState<ConsumptionUnity>(ConsumptionUnity.KWH)

    const { data: projects, isLoading: isProjectsLoading } = useListProjectsQuery()
    const { data: energy, isLoading: isEnergyLoading } = useGetProjectQuery(uuid!)

    if (isProjectsLoading || isEnergyLoading) {
        return <LoadingPage />
    }

    const project = projects!.find((project) => project.uuid === uuid)
    const chartData = formatChartData(energy!, project!.timezone, startDate, endDate, unity)

    return (
        <Page>
            <Breadcrumbs sx={{ mb: 4 }}>
                <Link to={HOME_URL} style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                    <ArrowBack />
                    <Box>Revenir à la liste des projets</Box>
                </Link>
            </Breadcrumbs>
            <Typography variant="h1" sx={{ mb: 4 }}>
                Projet {project?.name}
            </Typography>
            <Typography variant="h2" sx={{ mb: 4 }}>
                Consommation d&apos;énergie par postes au cours du temps
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ mb: 4, width: '100%' }}
                justifyContent="space-between"
                spacing={2}
            >
                <Select
                    options={Object.values(ConsumptionUnity).map((unity) => ({
                        value: unity,
                        label: unity,
                    }))}
                    inputLabel="Unité"
                    value={unity}
                    setValue={(value: string) => setUnity(value as ConsumptionUnity)}
                />
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                />
            </Stack>
            <Stack sx={{ width: '100%', height: '500px', mb: 4 }}>
                <ConsumptionChart data={chartData} xLabel="Date" yLabel={`Énergie (${unity})`} />
            </Stack>
            <Typography variant="h2" sx={{ mb: 6 }}>
                Statistiques de consommation d&apos;énergie
            </Typography>
            <Grid container spacing={2} alignItems="stretch">
                {energy?.map((e) => (
                    <Grid item xs={12} md={4} key={e.label}>
                        <StatisticsCard {...e} />
                    </Grid>
                ))}
            </Grid>
        </Page>
    )
}

export default ProjectPage
