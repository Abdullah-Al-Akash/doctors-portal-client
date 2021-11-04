import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(30, 35, 52, 0.8)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 170
}

const AppointmentBanner = () => {
        return (
                <Box style={appointmentBanner} sx={{ flexGrow: 1, mb: 3 }}>
                        <Container>
                                <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                                <img
                                                        style={{
                                                                width: 500,
                                                                marginTop: -135,
                                                        }}
                                                        src={doctor} alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',

                                        }}>
                                                <Box>
                                                        <Typography style={{ color: '#16CFE7', }} variant='h5' sx={{ mb: 4, mt: 4, fontWeight: 600 }}>
                                                                Appointment
                                                        </Typography>
                                                        <Typography variant='h3' sx={{ color: 'white', fontWeight: 600, mt: 4, mb: 4 }}>
                                                                Appointment Now Today
                                                        </Typography>
                                                        <Typography variant='p' sx={{ color: 'white', mb: 5 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis unde illum, temporibus iusto omnis error suscipit mollitia dicta nulla!
                                                        </Typography>
                                                        <Button
                                                                style={{ backgroundColor: '#16CFE7', }}
                                                                variant='contained' sx={{ marginTop: 4 }}>Learn More</Button>
                                                </Box>
                                        </Grid>
                                </Grid>
                        </Container>
                </Box>
        );
};

export default AppointmentBanner;