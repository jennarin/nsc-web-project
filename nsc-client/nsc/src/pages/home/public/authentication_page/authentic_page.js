import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'


const theme = createTheme();

export default function AuthenticPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className='content'>
            <div className='info'>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: 'flex',
                            backgroundColor: "inherit"

                        }} />
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{

                                // marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'


                            }}
                        >
                            <Typography component="h1" variant="h4">
                                ยันยืนรหัสโครงการ
                            </Typography>
                            <Typography sx={{
                                mt: 1,

                            }}>
                                เพื่อลงทะเบียนในการใช้งานบนเว็บไซต์
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="รหัสโครงการ / ชื่อผู้ใช้"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="รหัสผ่าน"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="newpassword"
                                    label="รหัสผ่านใหม่"
                                    type="password"
                                    id="newpassword"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    label="ยันยืนรหัสผ่าน"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="current-password"
                                />
                                {/* <Link exact path='/id' className='link'>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="medium"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        ยืนยัน
                                    </Button>
                                </Link> */}
                                <Grid container sx={{ flexDirection: 'column' }}>
                                    <Link to="/login" className='link'>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{ mt: 5, width: 150 }}>ยืนยัน</Button>
                                    </Link>
                                    <Link to="/login" className='link'>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            sx={{ mt: 3, mb: 25, width: 150 }}>ยกเลิก</Button>
                                    </Link>
                                </Grid>

                                <Grid container justifyContent="flex-end">
                                </Grid>
                            </Box>
                        </Box>

                    </Container>
                </ThemeProvider>
            </div>
        </div >
    );
}