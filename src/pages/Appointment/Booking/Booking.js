import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = (props) => {
        const { name, time, space } = props.booking;
        return (
                <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ py: 5, textAlign: 'center' }} >
                                <Typography sx={{ fontWeight: '600', color: 'info.main' }} variant="h5" gutterBottom component="div">
                                        {name}
                                </Typography>
                                <Typography sx={{ fontWeight: '500' }} variant="h6" gutterBottom component="div">
                                        {time}
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                        {space} SPACES AVAILABLE
                                </Typography>
                                <Button sx={{ backgroundColor: 'info.main' }} variant="contained">Book Appointment</Button>
                        </Paper>
                </Grid>
        );
};

export default Booking;