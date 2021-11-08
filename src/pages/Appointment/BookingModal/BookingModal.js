import React, { useState } from 'react';
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


const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
        const { user } = useAuth();
        const { name, time } = booking;

        // Handle Appointment:

        const initifialAppointmentInfo = { patientName: user.displayName, patientEmail: user.email }
        const [appointmentInfo, setAppointmentInfo] = useState(initifialAppointmentInfo);
        const handleOnBlur = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newBookingInfo = { ...appointmentInfo }
                newBookingInfo[field] = value;
                setAppointmentInfo(newBookingInfo)
        }

        const handleBookingSubmit = e => {
                e.preventDefault();
                // Collect Data:
                const appointment = {
                        ...appointmentInfo,
                        serviceName: name,
                        time,
                        appointmentDate: date.toLocaleDateString()
                }

                fetch('http://localhost:5000/appointments', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(appointment)
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data.insertedId) {
                                        setBookingSuccess(true);
                                        handleClose();
                                }

                        })

        }



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
                                                onBlur={handleOnBlur}
                                                id="outlined-size-small"
                                                placeholder="Your Name"
                                                defaultValue={user.displayName}
                                                name="patientName"
                                                size="small"
                                        />
                                        <TextField
                                                sx={{ m: 1, width: '95%' }}
                                                id="outlined-size-small"
                                                placeholder="Your Email"
                                                defaultValue={user.email}
                                                onBlur={handleOnBlur}
                                                name="patientEmail"
                                                size="small"
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