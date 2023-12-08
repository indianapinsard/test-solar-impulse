import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography, CardActionArea } from '@mui/material'
import { IProject } from '../interfaces'
import { ENERGY_URL } from '../routes'

const ProjectCard: React.FC<IProject> = ({ name, timezone, uuid }) => {
    const navigate = useNavigate()

    function navigateToProject(uuid: string) {
        navigate(ENERGY_URL(uuid))
    }

    return (
        <Card sx={{ maxWidth: 345, boxShadow: '2px 2px 25px rgba(0, 0, 0, 0.1)' }}>
            <CardActionArea sx={{ height: '100%' }} onClick={() => navigateToProject(uuid)}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Fuseau horaire : {timezone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Identifiant : {uuid}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProjectCard
