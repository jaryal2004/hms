import React from 'react';
import { Avatar, Box, Chip, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { pink } from '@mui/material/colors';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// copyright function for generate year automatically
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Developed with 🖤 by '}
            <strong><a className='text-style' href="#" target="_blank" rel="noreferrer noopener">bastolaronak</a> </strong>{'Copyright ©'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <footer>
            <Box
                className="sticky-container"
                sx={{
                    bgcolor: '#edf6f9',
                    color: 'black', // Ensure default color is black
                    mt: 3,
                    pb: 2,
                    top: 'auto',
                    fontSize: '1rem', // Default font size
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        display: { xs: 'flex', md: 'flex' },
                                        color: 'black',
                                        fontSize: '1.8rem', // Larger font size
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            mt: 1,
                                            mb: 1,
                                            mr: 1,
                                            bgcolor: 'white',
                                        }}
                                    >
                                        <HealingTwoToneIcon
                                            color="primary"
                                            fontSize="large"
                                        />
                                    </Avatar>
                                   <b>Health Haven Hospital</b> 
                                </Typography>
                                <Divider />
                            </Box>
<br></br>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                
                                
                                <Avatar
                                    sx={{ mt: 1, bgcolor: '#3b8ad1' }}
                                >
                                    <LocationOnIcon />
                                </Avatar>
                                <span style={{ fontSize: '1.1rem' }}>
                                   <b>Rajpura, Punjab</b> 
                                </span>
                            </Stack>
<br></br>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                <Avatar
                                    sx={{ mb: 1, mt: 1, bgcolor: '#3b8ad1' }}
                                >
                                    <EmailIcon />
                                </Avatar>
                                <a
                                    className="text-style"
                                    href="mailto:healthhaven@gmail.com"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                  <b>  healthhaven@gmail.com</b>
                                </a>
                            </Stack>
                            <br></br>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                <Avatar
                                    sx={{ mb: 1, bgcolor: '#3b8ad1' }}
                                >
                                    <CallIcon />
                                </Avatar>
                                <a
                                    className="text-style"
                                    href="tel:01680xxx86"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                  <b>+91-7018863328</b>  
                                </a>
                            </Stack>
                        </Grid>

                        {/* ----------Service part ---------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <b><Chip label="Our Services" /></b>
                                </Divider>
                            </Root>

                            <Box
                                sx={{
                                    p: 2,
                                    fontSize: '1.1rem',
                                    color: 'black',
                                }}
                            >
                                <NavLink
                                    className="text-style"
                                    to="/doctor"
                                    color="inherit"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    Find a Doctor
                                </NavLink>
                            </Box>

                            <Box
                                sx={{
                                    p: 2,
                                    fontSize: '1.1rem',
                                    color: 'black',
                                }}
                            >
                                <NavLink
                                    className="text-style"
                                    to="/services"
                                    color="inherit"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    All Services
                                </NavLink>
                            </Box>

                            <Box
                                sx={{
                                    p: 2,
                                    fontSize: '1.1rem',
                                    color: 'black',
                                }}
                            >
                                <NavLink
                                    className="text-style"
                                    to="/doctor"
                                    color="inherit"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    Make An Appointment
                                </NavLink>
                            </Box>

                            <Box
                                sx={{
                                    p: 2,
                                    fontSize: '1.1rem',
                                    color: 'black',
                                }}
                            >
                                <NavLink
                                    className="text-style"
                                    to="/contact"
                                    color="inherit"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    Contact Us
                                </NavLink>
                            </Box>
                        </Grid>

                        {/* ----------Social Media part ------------*/}

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <b><Chip label="Find us on social media" /></b>
                                </Divider>
                            </Root>
                            <br></br>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                <Avatar
                                    sx={{ mb: 1, mt: 1, bgcolor: '#0096c7' }}
                                >
                                    <FacebookIcon />
                                </Avatar>
                                <a
                                    className="text-style"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Facebook
                                </a>
                            </Stack>
<br></br>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                <Avatar
                                    sx={{ mb: 1, bgcolor: '#0096c7' }}
                                >
                                    <LinkedInIcon />
                                </Avatar>
                                <a
                                    className="text-style"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    LinkedIn
                                </a>
                            </Stack>
<br></br>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{ color: 'black' }}
                            >
                                <Avatar
                                    sx={{ mb: 1, bgcolor: '#0096c7' }}
                                >
                                    <GitHubIcon />
                                </Avatar>
                                <a
                                    className="text-style"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    GitHub
                                </a>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;  