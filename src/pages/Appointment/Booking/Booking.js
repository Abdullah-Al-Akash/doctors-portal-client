import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
        const { name, time, space } = booking;
        const [open, setOpen] = React.useState(false);
        const handleModalOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
                <>
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
                                        <Button onClick={handleModalOpen} sx={{ backgroundColor: 'info.main' }} variant="contained">Book Appointment</Button>
                                </Paper>
                        </Grid>
                        <BookingModal
                                date={date}
                                handleClose={handleClose}
                                open={open}
                                booking={booking}
                        ></BookingModal>
                </>
        );
};

export default Booking;