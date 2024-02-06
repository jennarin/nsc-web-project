import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Link, Paper } from '@mui/material';




const NavBarPublic = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>

            <AppBar position="static" color='inherit' sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                height: 90,

            }}>
                <Container maxWidth="xl" sx={{

                }}>
                    <Toolbar disableGutters sx={{
                        justifyContent: 'space-between'
                    }}>


                        <Typography
                            display='flex'
                            alignItems='center'
                            variant="h6"
                            noWrap
                            component="div"
                            color={blue[900]}
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Paper
                                onClick={handleCloseNavMenu}
                                elevation={0}
                                component="div"
                                noWrap>
                                <img src="/images/logo.png" height={70} />
                            </Paper>

                            NSC 2022 Southern Region
                        </Typography>



                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color={blue[900]}
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            justifyContent='flex-start'
                            fontSize={30}
                            alignItems='center'
                        >
                            <Paper
                                onClick={handleCloseNavMenu}
                                elevation={0}
                                component="div"
                                noWrap
                                sx={{
                                    mt:1
                                }}>
                                <img src="/images/logo.png" height={50} />
                            </Paper>
                            NSC 2022
                        </Typography>
                        <Link href="/login" >
                            <Button variant="contained" sx={{fontFamily: 'Sarabun', fontWeight:700}}>เข้าสู่ระบบ</Button>
                        </Link>                     
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};
export default NavBarPublic;
