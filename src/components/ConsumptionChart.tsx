import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import zoom from 'chartjs-plugin-zoom'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, zoom)

interface ConsumptionChartProps {
    data: any
    xLabel: string
    yLabel: string
}

const ConsumptionChart: React.FC<ConsumptionChartProps> = ({ data, xLabel, yLabel }) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Bar
            options={{
                plugins: {
                    legend: {
                        align: 'start',
                        position: isDesktop ? 'right' : 'bottom',
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            mode: 'x',
                        },
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                        title: { display: true, text: xLabel },
                    },
                    y: {
                        stacked: true,
                        title: { display: true, text: yLabel },
                    },
                },
                maintainAspectRatio: false,
            }}
            data={data}
        />
    )
}

export default ConsumptionChart
