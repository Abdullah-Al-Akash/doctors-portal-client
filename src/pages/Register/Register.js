import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';

const Register = () => {
        const [loginData, setLoginData] = useState({});
        const { register, isLoading } = useAuth()
        const handleOnchange = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newLoginData = { ...loginData };
                newLoginData[field] = value;
                console.log(field, value, newLoginData);
                setLoginData(newLoginData);
        }
        const handleLogin = e => {
                e.preventDefault();
                if (loginData.password !== loginData.password2) {
                        alert('Password did not match');
                        return;
                }
                register(loginData.email, loginData.password);
        }
        return (
                <Container>
                        <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                        <Typography sx={{ mt: 15, textAlign: 'center', fontWeight: 600 }} variant='h4' gutterBottom>Register</Typography>
                                        {
                                                !isLoading &&
                                                <form onSubmit={handleLogin}>
                                                        <TextField
                                                                onChange={handleOnchange}
                                                                sx={{ width: '80%', m: 2 }}
                                                                id="standard-basic"
                                                                label="Your Email"
                                                                name="email"
                                                                variant="standard" />
                                                        <TextField
                                                                onChange={handleOnchange}
                                                                sx={{ width: '80%', m: 2 }}
                                                                id="standard-basic"
                                                                type="password"
                                                                name="password"
                                                                label="Your Password"
                                                                variant="standard" />
                                                        <TextField
                                                                onChange={handleOnchange}
                                                                sx={{ width: '80%', m: 2 }}
                                                                id="standard-basic"
                                                                type="password"
                                                                name="password2"
                                                                label="Re-Type Your Password"
                                                                variant="standard" />
                                                        <Button
                                                                type="submit"
                                                                sx={{ width: '80%', m: 2 }}
                                                                variant="contained">
                                                                Register
                                                        </Button>
                                                        <Typography variant="h6"
                                                                sx={{ width: '80%', m: 2 }}
                                                        >Already have an account?
                                                                <NavLink style={{ marginLeft: '5px' }} to="/login">
                                                                        Login Here
                                                                </NavLink>
                                                        </Typography>

                                                </form>}
                                        {
                                                isLoading &&
                                                <CircularProgress />
                                        }
                                </Grid>
                                <Grid item xs={12} md={6}>
                                        <img style={{ width: '100%' }} src={login} alt="" />
                                </Grid>
                        </Grid>
                </Container >
        );
};

export default Register;