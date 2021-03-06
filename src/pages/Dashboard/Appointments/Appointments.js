import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date, setDate }) => {
        const { user } = useAuth();
        const [appointments, setAppointments] = useState([]);

        // Load Data:
        useEffect(() => {
                const url = `http://localhost:5000/appointments?patientEmail=${user.email}&date=${date}`
                fetch(url)
                        .then(res => res.json())
                        .then(data => setAppointments(data))
        }, [date])
        return (
                <div>
                        <h2>Hello Appointments {appointments.length}</h2>
                        <TableContainer component={Paper}>
                                <Table sx={{}} aria-label="Appointments Table">
                                        <TableHead>
                                                <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align="center">Department</TableCell>
                                                        <TableCell align="center">Time</TableCell>
                                                        <TableCell align="center">Action</TableCell>
                                                </TableRow>
                                        </TableHead>
                                        <TableBody>
                                                {appointments.map((row) => (
                                                        <TableRow
                                                                key={row._id}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                                <TableCell component="th" scope="row">
                                                                        {row.patientName}
                                                                </TableCell>
                                                                <TableCell align="center">{row.serviceName}</TableCell>
                                                                <TableCell align="center">{row.time}</TableCell>
                                                                <TableCell align="center">{row.fat}</TableCell>
                                                        </TableRow>
                                                ))}
                                        </TableBody>
                                </Table>
                        </TableContainer>
                </div>
        );
};

export default Appointments;