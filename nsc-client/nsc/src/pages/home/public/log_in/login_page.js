import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Paper, Link, Grid, Box, TextField, Button, Container, IconButton,
    FormControl, InputAdornment, Alert, InputLabel, OutlinedInput
} from '@mui/material';

import axiosInstance from '../../../../axios';
import NavBarPublicLogin from '../../../../components/navbar/navbar_public_login';
import { blue } from '@mui/material/colors';

export default function LogInPage() {

    let history = useHistory();

    const initialFormData = Object.freeze({
        username: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);
    const [error, setError] = useState();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`token/`, {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                if (res.data.admin === true) {
                    history.push("/nsc-admin");
                } else {
                    history.push("/id");
                }

            }, reason => {
                console.error(reason);
                setError('เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่')
            });

    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <NavBarPublicLogin />
            <Paper sx={{
                bgcolor: 'blue'
            }}>
                <Paper sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: blue[900]
        
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
                                borderRadius: 8,
                                minHeight: 600
                            }}
                        >


                            <h1>เข้าสู่ระบบ</h1>

                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, padding: 2 }}>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="รหัสโครงการ / ชื่อผู้ใช้"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">รหัสผ่าน</InputLabel>
                                    <OutlinedInput
                                        margin="normal"
                                        name="password"
                                        label="รหัสผ่าน"
                                        type={values.showPassword ? 'text' : 'password'}
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>


                                <Grid container nowarp sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    {error ? <Alert fullWidth variant="outlined" severity="error" sx={{ mt: 2, fontFamily: 'Sarabun', fontWeight: 700 }}>{error}</Alert> : null}

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 3, fontFamily: 'Sarabun', fontWeight: 700 }}
                                        onClick={handleSubmit}
                                    >
                                        เข้าสู่ระบบ
                                    </Button>
                                    <Link href="/" className='link'>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            sx={{ mt: 2, fontFamily: 'Sarabun', fontWeight: 700 }}>
                                            ย้อนกลับ
                                        </Button>
                                    </Link>
                                </Grid>
                            </Box>
                        </Box>

                    </Container>
                </Paper>
            </Paper>
        </div>


    );
}