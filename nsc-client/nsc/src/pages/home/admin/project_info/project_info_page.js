import { Box, Container, Paper } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import NavBarAdmin from '../../../../components/navbar/admin_navbar'
import ProjectInfoFetch from './project_info_fetching'

export default function AdminProjectInfoPage
    () {
    return (
        <div>
            <NavBarAdmin />
            <Paper sx={{
                bgcolor: 'blue'
            }}>
                <Paper sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: blue[900]
                    ,
                }}>

                    <Container component="main">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                bgcolor: 'white',
                                width: '100%',
                                mt: 2,
                                mb: 2,
                                borderRadius: 8
                            }}
                        >
                            <Box sx={{
                                padding: 5
                            }}>
                                <ProjectInfoFetch />
                            </Box>
                        </Box>
                    </Container>
                </Paper>
            </Paper>

        </div>
    )
}
