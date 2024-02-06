import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Dialog, DialogTitle, DialogContent, DialogActions, Divider, Button, Paper, Container } from '@mui/material'
import { red } from '@mui/material/colors'
import NavBarAdmin from '../../../../components/navbar/admin_navbar'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from '@mui/material'
import { TextField } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { blue } from '@mui/material/colors'
import config from '../../../../config'

export default function AdminAnnouncementPage() {
    let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [announcement, setAnnouncement] = useState(null)
    const [filecontent, setFileContent] = useState(null)
    const [posts, setPosts] = useState([])
    const { id } = useParams();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const AddNewAnnouncement = async () => {
        setOpen(false);
        let fromField = new FormData()
        fromField.append('announcement', announcement)
        fromField.append('filecontent', filecontent)

        if (filecontent !== null) {
            fromField.append('filecontent', filecontent)
        }

        await axios({
            method: 'post',
            url: `${config.apiUrlPrefix}/addAnnouncement/`,
            data: fromField
        }).then(response => {
            console.log(response.data);
            history.push('/nsc-admin/announcement')
        })
        
    }


    const [file, setFile] = useState([])
    const getAnnouncementFile = async () => {
        const { data } = await axios.get(`${config.apiUrlPrefix}/admin-upload-announcement/`)
        console.log(data)
        setFile(data)
    }
    useEffect(() => {
        getAnnouncementFile();
    }, [])

    useEffect(() => {

        axios.get(`${config.apiUrlPrefix}/admin-upload-announcement/`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
                history.push('/nsc-admin/announcement')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const deleteAnnoucement = async (id) => {
        if (window.confirm("ยืนยันที่จะลบประกาศนี้ใช่หรือไม่")) {
            await axios.delete(`${config.apiUrlPrefix}/deleteAnnouncement/${id}/`);
            window.location.reload()
        }
    }




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
                    bgcolor: blue[900],
                    minHeight: 750
                }}>

                    <Container component="main">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                bgcolor: 'white',
                                width: '100%',
                                minHeight: 720,
                                mt: 2,
                                mb: 2,
                                borderRadius: 8
                            }}
                        >
                            <Box sx={{
                                padding: 5
                            }}>
                                <h2 className='content'>ประชาสัมพันธ์</h2>
                                {/* <Box
                                    display='flex'
                                    flexDirection="column"
                                    justifyContent="space-evenly"
                                    alignItems="stretch"
                                    noWrap
                                    spacing={2}
                                > */}
                                <ul>
                                    <div>


                                        <p className="list"> ประกาศ <Button variant="text" sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} component="span" size="medium" onClick={handleClickOpen}>
                                            + เพิ่มประกาศ
                                        </Button></p>
                                        <Divider />
                                        <Box
                                            display='flex'
                                            flexDirection="column"
                                            justifyContent="space-evenly"
                                            alignItems="stretch"
                                            spacing={2}

                                        >
                                            {
                                                posts.map(post => <p className="list"> - <a className='list' key={post.id} href={post.filecontent} target="_blank">  {post.announcement}</a>

                                                    <Link href="/nsc-admin/announcement" underline='none'>
                                                        <Button sx={{ ml: 1, fontFamily: 'Sarabun', fontWeight: 700 }} onClick={() => deleteAnnoucement(post.id)} size="medium" variant="text" color="error">
                                                            ลบ
                                                        </Button>
                                                    </Link>

                                                </p>)

                                            }
                                        </Box>
                                        <div>
                                            <div>
                                                <th>
                                                    <Box
                                                        display='flex'
                                                        flexDirection="row"
                                                        justifyContent="space-evenly"
                                                        alignItems="stretch"
                                                        spacing={2}
                                                    >
                                                        <Dialog open={open} onClose={handleClose}>
                                                            <DialogTitle sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} >เพิ่มประกาศใหม่</DialogTitle>
                                                            <Divider />
                                                            <DialogContent>
                                                                <DialogContentText sx={{ fontFamily: 'Sarabun', fontWeight: '1000' }}>
                                                                    ชื่อประกาศ :
                                                                </DialogContentText >
                                                                <TextField
                                                                    id="standard-basic"
                                                                    multiline
                                                                    variant="standard"
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    name="announcement"
                                                                    value={announcement}
                                                                    onChange={(e) => setAnnouncement(e.target.value)}
                                                                />
                                                                <DialogContentText sx={{ mt: 3, mb: 1, fontFamily: 'Sarabun', fontWeight: '1000' }}>
                                                                    เลือกไฟล์ :
                                                                </DialogContentText>
                                                                <label htmlFor='contained-button-file'>
                                                                    <input type='file'
                                                                        multiple="multiple"
                                                                        className='from-control from-control-lg'
                                                                        name='certificate'
                                                                        label={file.certificate}
                                                                        onChange={(e) => setFileContent(e.target.files[0])}
                                                                        id="contained-button-file" />
                                                                </label>

                                                                <DialogContentText sx={{ mt: 3, mb: 1, fontFamily: 'Sarabun', fontWeight: '1000' }}>
                                                                    หมายเหตุ : กรอกข้อมูลให้ครบถ้วน
                                                                </DialogContentText>
                                                            </DialogContent>
                                                            <Divider />
                                                            <DialogActions>
                                                                <Link href='/nsc-admin/announcement' underline='none'>
                                                                    <Button sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} variant="text" component="span" size="medium" onClick={AddNewAnnouncement} >อัปโหลด</Button>
                                                                </Link>
                                                                <Button sx={{ fontFamily: 'Sarabun', fontWeight: 700, color: red[600] }} variant="text" component="span" size="medium" onClick={handleClose} >ยกเลิก</Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </Box>
                                                </th>

                                            </div>

                                        </div>

                                    </div>
                                </ul>
                            </Box>
                        </Box>
                        {/* </Box> */}
                    </Container>
                </Paper>
            </Paper>
        </div >
    )

}
