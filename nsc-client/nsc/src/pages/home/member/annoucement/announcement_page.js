import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import NavBarMember from '../../../../components/navbar/navbar'
import { Divider } from '@mui/material'
import { blue } from '@mui/material/colors'
import config from '../../../../config'

export default function MemberAnnouncementFetch() {
    const [posts, setPosts] = useState([])


    useEffect(() => {

        axios.get(`${config.apiUrlPrefix}/admin-upload-announcement/`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <NavBarMember />
            <Paper sx={{
                bgcolor: 'blue'
            }}>
                <Paper sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: blue[900],
                    height: 750
                }}>

                    <Container component="main">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                bgcolor: 'white',
                                width: '100%',
                                height: 720,
                                mt: 2,
                                mb: 2,
                                borderRadius: 8
                            }}
                        >
                            <Box sx={{
                                padding: 5
                            }}>
                                <h2 className='content'>ประชาสัมพันธ์</h2>
                                <ul>
                                    <p className="list"> ประกาศ </p>
                                    <Divider />
                                    <Box
                                            display='flex'
                                            flexDirection="column"
                                            justifyContent="space-evenly"
                                            alignItems="stretch"
                                            spacing={2}

                                        >
                         
                                                {

                                                    posts.map(post => <p className="list"> - <a className='list' key={post.id} href={post.filecontent} target="_blank">  {post.announcement}</a></p>)

                                                }
                                    </Box >
                                </ul>
                            </Box>
                        </Box>
                    </Container>
                </Paper>
            </Paper>
        </div >
    )
}

