import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './project_info.css'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { DialogTitle } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogActions } from '@mui/material'
import { Divider } from '@mui/material'
import { red } from '@mui/material/colors'
import { Link } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { Alert } from '@mui/material'
import config from '../../../../config'





export default function ProjectInfoFetch() {
    const [post, setPost] = useState({})
    const [Project, setProject] = useState('24p11s0052')
    const [SearchFromButtonClick, setSearchFromButtonClick] = useState('24p11s0052')
    const [error, setError] = useState();
    const [announcement, setAnnouncement] = useState(null)
    const [filecontent, setFileContent] = useState(null)
    const [posts, setPosts] = useState([])
    // const { id } = useParams();

    useEffect(() => {

        axios.get(`${config.apiUrlPrefix}/certificate/`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    // const Input = styled('input')({
    //     display: 'none',
    // });
    const handleClick = () => {
        setSearchFromButtonClick(Project)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        axios.get(`${config.apiUrlPrefix}/projectList/${SearchFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            }, reason => {
                console.error(reason);
                setError('เกิดข้อผิดพลาด : ไม่พบข้อมูล โปรดตรวจสอบรหัสโครงการอีกครั้ง')
            })

    }, [SearchFromButtonClick])

    const AddNewAnnouncement = async () => {
        let fromField = new FormData()
        fromField.append('project_id_certi', announcement)
        fromField.append('certificate', filecontent)

        if (filecontent !== null) {
            fromField.append('certificate', filecontent)
        }

        await axios({
            method: 'post',
            url: `${config.apiUrlPrefix}api/addCertificate/`,
            data: fromField
        }).then(response => {
            console.log(response.data)
        })
    }


    const loadAnnouncement = async () => {
        const { data } = await axios.get(`${config.apiUrlPrefix}/certificate/`)
        console.log(data)
        setAnnouncement(data.project_id_certi)
        setFileContent(data.certificate)
    }

    useEffect(() => {
        loadAnnouncement()
    }, [])

    const deleteAnnoucement = async (id) => {
        if (window.confirm("ยืนยันที่จะลบไฟล์ใช่หรือไม่")) {
            await axios.delete(`${config.apiUrlPrefix}/deleteCertificate/${id}`);
            window.location.reload();

        }
    }


    const [file, setFile] = useState([])
    const getAnnouncementFile = async () => {
        const { data } = await axios.get(`${config.apiUrlPrefix}/certificate/`)
        console.log(data)
        setFile(data)
    }
    useEffect(() => {
        getAnnouncementFile();
    }, [])





    return (
        <div>
            <h2 className='content'>ข้อมูลโครงการ</h2>
            <div>
                <ul>
                    <p className='list'>ค้นหารหัสโครงการ :
                        <TextField sx={{ m: 1 }} id='standard-basic' variant='standard' value={Project} onChange={e => setProject(e.target.value)} />
                        <Button sx={{ m: 1, fontFamily: 'Sarabun', fontWeight: 700 }} variant='contained' size='small' onClick={handleClick}>ค้นหา</Button>
                    </p>
                    {error ? <Alert fullWidth variant="outlined" severity="error" sx={{ mt: 2, fontFamily: 'Sarabun', fontWeight: 700 }}>{error}</Alert> : null}

                    <p className='list'>รหัสโครงการ : {post.project_id}</p>
                    <p className='list'>ชื่อโครงการ : {post.project}</p>
                    <p className='list'>หมวดโครงการ : {post.category}</p>
                    <p className='list'>ระดับ : {post.level}</p>
                    <p className='list'>สถาบัน : {post.institution}</p>
                    <p className='list'>อาจารย์ที่ปรึกษา : {post.advisor}</p>
                    <p className='list'>สมาชิก : </p>
                    <p className='list'>{post.member1} (หัวหน้าโครงการ)</p>
                    <p className='list'>{post.member2}</p>
                    <p className='list'>{post.member3}</p>
                </ul>

                {/* <h2 className='content'>สถานะการแข่งขัน</h2> */}

                {/* <ul> */}
                <div>
                    {/* <p className="list"> สถานะ : "ผ่านการตรวจสอบ"</p> */}
                    <h3> ใบเกียรติบัตรรอบที่ 2 : <Button variant="text" sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} component="span" size="medium" onClick={handleClickOpen}>
                        + อัปโหลดไฟล์
                    </Button></h3>
                    <ul>
                        {
                            posts.map(post => <p className="list"> - <a className='list' key={post.id} href={post.certificate} target="_blank">  {post.project_id_certi}</a>

                                <Button sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} onClick={() => deleteAnnoucement(post.id)} size="small" variant="text" color="error">
                                    ลบ
                                </Button>


                            </p>)

                        }

                    </ul>

                    {/* <p className="list"> ใบเกียรติบัตรรอบที่ 2 : <UploadCert /> </p> */}
                    {/* <a className="list" href={file.certificate} target="_blank">{file.certificate}</a> */}
                    <a className="list" href={file.certificate} target="_blank">{file.project_id_certi}</a>

                    <div>
                        <div>
                            <th>
                                <Box
                                    display='flex'
                                    flexDirection="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    spacing={2}
                                >
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogTitle sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} >อัปโหลดไฟล์</DialogTitle>
                                        <Divider />
                                        <DialogContent>
                                            <DialogContentText sx={{ my: 2, fontFamily: 'Sarabun', fontWeight: 700 }}>
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

                                            <DialogContentText sx={{ mt: 3, mb: 1, fontFamily: 'Sarabun', fontWeight: 700 }}>
                                                บันทึกชื่อไฟล์เป็น
                                            </DialogContentText>
                                            <TextField
                                                td="standard-basic"
                                                multiline
                                                variant="standard"
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="project_id_certi"
                                                value={announcement}
                                                onChange={(e) => setAnnouncement(e.target.value)}
                                            />

                                            <DialogContentText sx={{ mt: 3, mb: 1, fontFamily: 'Sarabun', fontWeight: '1000' }}>
                                                หมายเหตุ : กรอกข้อมูลให้ครบถ้วน
                                            </DialogContentText>

                                        </DialogContent>
                                        <Divider />
                                        <DialogActions>
                                            <Link href="/nsc-admin/id/project_info/" underline='none'>
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
                {/* </ul> */}











                {/* <ul>
                    <div>
                        <p className="list"> สถานะ : "ผ่านการตรวจสอบ"</p>
                        <p className="list"> ใบเกียรติบัตรรอบที่ 2 : <Button variant="text" sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} component="span" size="medium" onClick={handleClickOpen}>
                            แก้ไขไฟล์
                        </Button></p>

                        <ul>
                        </ul>
                        <a className="list" href={file.certificate} target="_blank">{namecerti}</a>

                        <div>
                            <div>
                                <th>
                                    <Box
                                        display='flex'
                                        flexDirection="row"
                                        justifyContent="space-evenly"
                                        alignItems="baseline"
                                        spacing={2}
                                    >


                                        <Dialog open={open} onClose={handleClose}>
                                            <DialogTitle sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} >แก้ไขไฟล์</DialogTitle>
                                            <Divider />
                                            <DialogContent  >
                                                <DialogContentText sx={{ fontFamily: 'Sarabun', fontWeight: 700 }}>
                                                    หมายเหตุ : โปรดอัปโหลดเป็นไฟล์นามสกุล (.zip)

                                                </DialogContentText>
                                                <DialogContentText sx={{ my:2, fontFamily: 'Sarabun', fontWeight: 700 }}>
                                                    เลือกไฟล์ :
                                                
                                                
                                                </DialogContentText>
                                                <label htmlFor='contained-button-file'>
                                                    <input type='file'
                                                        multiple="multiple"
                                                        className='from-control from-control-lg'
                                                        name='certificate'
                                                        label={file.certificate}
                                                        onChange={(e) => setAddFile(e.target.files[0])}
                                                        id="contained-button-file" />
                                                </label>
                                            </DialogContent>
                                            <Divider />
                                            <DialogActions>
                                                <Link href='/admin/id/project_info' underline='none'>
                                                    <Button sx={{ fontFamily: 'Sarabun', fontWeight: 700 }} variant="text" component="span" size="medium" onClick={addUserFile} >ตกลง</Button>
                                                </Link>
                                                <Button sx={{ fontFamily: 'Sarabun', fontWeight: 700, color: red[600] }} variant="text" component="span" size="medium" onClick={handleClose} >ยกเลิก</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Box>
                                </th>

                            </div>

                        </div>
                    </div>
                </ul> */}

            </div >

        </div >
    )
}

