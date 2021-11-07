import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
};

const BookingModal = ({ open, handleClose, booking, date }) => {
        const { name, time } = booking;

        const handleBookingSubmit = e => {
                e.preventDefault();
                alert("Submitting");
                // Collect Data:
                handleClose();
        }

        const { user } = useAuth();
        return (
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                >
                        <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {name}
                                </Typography>
                                <form onSubmit={handleBookingSubmit}>
                                        <TextField
                                                sx={{ m: 1, width: '95%' }}
                                                id="outlined-size-small"
                                                defaultValue={time}
                                                size="small"
                                                inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                                sx={{ m: 1, width: '95%' }}

                                                id="outlined-size-small"
                                                placeholder="Your Name"
                                                defaultValue={user.displayName}
                                                size="small"
                                                inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                                sx={{ m: 1, width: '95%' }}
                                                id="outlined-size-small"
                                                placeholder="Your Email"
                                                defaultValue={user.email}
                                                size="small"
                                                inputProps={{ readOnly: true }}
                                        />
                                        <TextField
                                                sx={{ m: 1, width: '95%' }}
                                                id="outlined-size-small"
                                                defaultValue={date.toDateString()}
                                                size="small"
                                                inputProps={{ readOnly: true }}
                                        />
                                        <Button type="submit" variant="contained">Submit</Button>
                                </form>
                        </Box>
                </Modal>
        );
};

export default BookingModal;