import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { blue } from '@mui/material/colors';
import { Link, Paper } from '@mui/material';


const NavBarMember = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                    <Toolbar disableGutters>


                        <Typography
                            display='flex'
                            alignItems='center'
                            variant="h6"
                            noWrap
                            component="div"
                            color={blue[900]}
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontFamily: 'Sarabun', fontWeight:700 } }}
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


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none'},
                                }}
                            >

                                <Typography textAlign="center" sx={{fontFamily: 'Sarabun', fontWeight:700, my:1}}>24p11s0052</Typography>
                                <Divider />
                                <Link href='/id' underline='none'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color={blue[900]} sx={{fontFamily: 'Sarabun', fontWeight:700, my:1}}>หน้าหลัก</Typography>
                                    </MenuItem>

                                </Link>
                                <Link href='/id/announcement' underline='none'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color={blue[900]} sx={{fontFamily: 'Sarabun', fontWeight:700, my:1}}>ประชาสัมพันธ์</Typography>
                                    </MenuItem>

                                </Link>
                                <Link href='/id/project_info' underline='none'>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color={blue[900]} sx={{fontFamily: 'Sarabun', fontWeight:700, my:1}}>โครงการของฉัน</Typography>
                                    </MenuItem>

                                </Link>
                                <Divider />
                                <Link href='/'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color={blue[900]} sx={{fontFamily: 'Sarabun', fontWeight:700, my:1}}>ออกจากระบบ</Typography>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color={blue[900]}
                            fontSize={30}
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', fontFamily: 'Sarabun', fontWeight:700 }}}
                        >
                            NSC 2022
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Link href="/id" underline='none'>
                                <Button
                                    variant='text'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: blue[900], display: 'block', fontFamily: 'Sarabun', fontWeight:700}}
                                >
                                    หน้าหลัก
                                </Button>
                            </Link>
                            <Link href="/id/announcement" underline='none'>
                                <Button
                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: blue[900], display: 'block', fontFamily: 'Sarabun', fontWeight:700}}
                                >
                                    ประชาสัมพันธ์
                                </Button>
                            </Link>
                            <Link href="/id/project_info" underline='none'>
                                <Button
                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: blue[900], display: 'block', fontFamily: 'Sarabun', fontWeight:700}}
                                >
                                    โครงการของฉัน
                                </Button>

                            </Link>


                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',  } }} justifyContent='flex-end' alignItems='center'>
                            <Typography
                                color={blue[900]}
                                sx={{
                                    marginRight: 2, 
                                    fontFamily: 'Sarabun', fontWeight:700
                                }}>
                                    รหัสโครงการ 24p11s0052</Typography>
                            <Link href='/' underline='none'>
                                <Button onClick={handleCloseNavMenu} sx={{ color: blue[900], fontFamily: 'Sarabun', fontWeight:700 }} variant='text'>ออกจากระบบ</Button>
                            </Link>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>
        </div >
    );
};
export default NavBarMember;
