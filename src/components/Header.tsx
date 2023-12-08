import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar } from '@mui/material'
import logo from '../statics/logo.jpg'
import { HOME_URL } from '../routes'

const Header: React.FC = () => (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: '0px 0px 250px rgba(0, 0, 0, 0.12)' }}>
        <Toolbar>
            <Link to={HOME_URL}>
                <Box
                    component="img"
                    src={logo}
                    alt="Smart impulse logo"
                    sx={{
                        width: '125px',
                        height: 'auto',
                    }}
                />
            </Link>
        </Toolbar>
    </AppBar>
)

export default Header
