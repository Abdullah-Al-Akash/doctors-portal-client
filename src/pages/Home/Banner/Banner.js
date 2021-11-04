import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const banner = {
        background: `url(${bg})`,
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'content-box',
        backgroundSize: 'cover'
}

const verticalCenter = {
        height: "100vh",
        display: 'flex',
        alignItems: 'center',

}

const Banner = () => {
        return (
                <Box style={banner} sx={{ flexGrow: 1 }}>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={12} md={6} style={verticalCenter}>
                                                <Box>
                                                        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                                                                Your New Smile <br />
                                                                From Here
                                                        </Typography>
                                                        <Typography variant="h6" sx={{ color: 'gray', my: 2, fontWeight: 300 }}>
                                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit molestias neque eveniet illum consequuntur qui voluptas unde debitis alias fugiat?
                                                        </Typography>
                                                        <br />
                                                        <Button style={{ backgroundColor: '#16CFE7', color: 'black' }}
                                                                variant='contained'>
                                                                Get Appointment
                                                        </Button>
                                                </Box>
                                        </Grid>
                                        <Grid style={verticalCenter} item xs={12} md={6}>
                                                <Box sx={{ p: 5 }}>
                                                        <img style={{ width: '500px' }} src={chair} alt="" />
                                                </Box>

                                        </Grid>
                                </Grid>
                        </Container>
                </Box>
        );
};

export default Banner;