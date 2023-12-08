import * as React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { IEnergy } from '../interfaces'

const StatisticsCard: React.FC<IEnergy> = ({ label, data, color }) => {
    const values = data.map((e) => e[1])
    const max = Math.round(Math.max(...values) / 1000)
    const min = Math.round(Math.min(...values) / 1000)
    const average = Math.round(values.reduce((a, b) => a + b, 0) / values.length / 1000)

    return (
        <Card sx={{ height: '100%', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }} color={color}>
                    {label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Maximum : {max} kWh
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Minimum : {min} kWh
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Moyenne : {average} kWh
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StatisticsCard
