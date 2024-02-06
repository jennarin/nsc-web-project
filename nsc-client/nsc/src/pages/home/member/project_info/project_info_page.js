import { Box, Container, Paper, paperClasses } from "@mui/material"
import { blue } from "@mui/material/colors"
import axios from "axios"
import React, { useEffect, useState } from "react"
import NavBarMember from "../../../../components/navbar/navbar"
import './project_info.css'
import config from '../../../../config'

const ProjectInfoPage = (props) => {
  const [posts, setPosts] = useState([])


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
          // minHeight: 600,
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
                borderRadius: 8,
                minHeight: 600,

              }}
            >
              <Box sx={{
                padding: 5
              }}>

                <h2 className='content'>ข้อมูลโครงการ</h2>
                <ul>
                  <div>
                    <p className="list"> รหัสโครงการ : 24p11s0052</p>
                    <p className="list"> ชื่อโครงการ :  โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่น AOV </p>
                    <p className="list"> หมวดโครงการ : โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</p>
                    <p className="list"> ระดับ : นิสิต นักศึกษา </p>
                    <p className="list"> สถาบัน : มหาวิทยาลัยวลัยลักษณ์ </p>
                    <p className="list"> อาจารย์ที่ปรึกษา : นายชิระวัฒน์ วัฒนพานิช</p>
                    <p className="list"> สมาชิก : </p>
                    <p className="list"> นายปุณณวิช ฝอยทอง (หัวหน้าโครงการ)</p>
                    <p className="list"> นางสาวกวิญ ทิพย์ยาปัน </p>
                    <p className="list"> นายวิศิษฏ์ศักดิ์ อ่อนแก้ว </p>

                  </div>
                </ul>
                <h3 className='content'>ใบเกียรติบัตรรอบที่ 2 : </h3>
                <ul>
                  <div>
                    {/* <p className="list"> สถานะ : "ผ่านการตรวจสอบ"</p> */}
                    {/* <p className="list"> ใบเกียรติบัตรรอบที่ 2 : </p> */}

                    {

                      posts.map(post => <p className="list"> - <a className='list' key={post.id} href={post.certificate} target="_blank">  {post.project_id_certi}</a></p>)

                    }
                  </div>
                </ul>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Paper>
    </div>


  )
}

export default ProjectInfoPage