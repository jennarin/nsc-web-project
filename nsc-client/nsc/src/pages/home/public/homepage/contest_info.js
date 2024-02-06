import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { blue } from '@mui/material/colors';

function createData(schedule, date, category) {
    return { schedule, date, category };
}

const rows_schedule = [
    createData('รับข้อเสนอโครงการ', '16 สิงหาคม - 30 กันยายน 2564'),
    createData('ตรวจผลงานรอบข้อเสนอโครงการ', '4-15 ตุลาคม 2564'),
    createData('ประกาศผลรอบข้อเสนอโครงการ', '18 ตุลาคม 2564'),
    createData('ส่งมอบผลงานรอบนำเสนอผลงาน', '31 มกราคม 2565 (ระบบปิดภายในเวลา 17.00 น.)'),
    createData('ตรวจผลงานรอบนำเสนอผลงาน', '3 - 14 กุมภาพันธ์ 2564'),
    createData('ประกาศผลโครงการที่ได้รับทุนสนับสนุนและโครงการผ่านเข้ารอบชิงชนะเลิศ', '17 กุมภาพันธ์ 2564'),
    createData('รอบชิงชนะเลิศ', 'มีนาคม 2565'),
];

const rows_category = [
    createData('11', '21', 'โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้'),
    createData('12', '22', 'โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม'),
    createData('13', '23', 'โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ'),
    createData('14', '24', 'โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่'),

];

const rows_contact = [
    createData('ภาคเหนือ', 'northernNSC@gmail.com'),
    createData('ภาคตะวันออกเฉียงเหนือ', 'nsc.isan.kkusp@gmail.com'),
    createData('ภาคใต้', 'wimon@coe.psu.ac.th'),
    createData('ภาคตะวันตก', 'oatcomster@gmail.com, anncenter@gmail.com'),
    createData('ภาคตะวันออก', 'krisana@it.buu.ac.th'),
    createData('ภาคกลาง', 'siitnsc@gmail.com'),
];


const rows_southern_contact = [
    createData('ชื่อผู้ประสานงาน: ', 'อ.เสกสรรค์  สุวรรณมณี,  คุณวิมล คำจันทร์'),
    createData('ที่อยู่ผู้ประสานงาน: ', 'สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ เลขที่ 15 ถนนกาญจนวณิชย์  อำเภอหาดใหญ่ จังหวัดสงขลา 90110'),
    createData('โทรศัพท์ :', '074 287076'),
    createData('โทรสาร : ', '074 287076'),
    createData('Email :', 'sseksun@coe.psu.ac.th, wimon@coe.psu.ac.th'),
    createData('Facebook :', 'NSC Thailand Southern Region'),

];

export default function ContestInfo() {
    return (
        <div>
            <Paper sx={{
                bgcolor: 'blue'
            }}>
                <Paper sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: blue[900],
                    minHeight: 750,
                }}>

                    <Container component="main">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: 'white',
                                width: '100%',
                                mt: 2,
                                mb: 2,
                                textAlign: 'center',
                                borderRadius: 8,
                            }}
                        >
                            <h1>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย</h1>
                            
                            <h1> ปี 2022 ครั้งที่ 24 ระดับภาคใต้</h1>
                            <h1>NSC 2022 Southern Region</h1>
                            <h2>กำหนดการแข่งขัน</h2>

                            <Paper elevation={0} sx={{
                                padding: 2
                            }}>

                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableBody>
                                            {rows_schedule.map((row) => (
                                                <TableRow
                                                    key={row.schedule}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.schedule}
                                                    </TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>


                            <h2>หมวดการแข่งขัน</h2>
                            <Paper elevation={0} sx={{
                                padding: 2
                            }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">นิสิตและนักศึกษา</TableCell>
                                                <TableCell align="center">นักเรียน</TableCell>
                                                <TableCell align="center">หมวดการแข่งขัน</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows_category.map((row) => (
                                                <TableRow
                                                    key={row.schedule}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" align="center">
                                                        {row.schedule}
                                                    </TableCell>

                                                    <TableCell align="center">{row.date}</TableCell>
                                                    <TableCell align="left">{row.category}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>


                            <h2>ติดต่อศูนย์ประสานงานภาคใต้</h2>
                            <Paper elevation={0} sx={{
                                padding: 2
                            }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableBody>
                                            {rows_southern_contact.map((row) => (
                                                <TableRow
                                                    key={row.schedule}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.schedule}
                                                    </TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

                            <h2>ติดต่อศูนย์ประสานงาน</h2>
                            <Paper elevation={0} sx={{
                                padding: 2
                            }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableBody>
                                            {rows_contact.map((row) => (
                                                <TableRow
                                                    key={row.schedule}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.schedule}
                                                    </TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Box>
                    </Container>
                </Paper>
            </Paper>

        </div>
    );
}

