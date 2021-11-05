import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../images/login.png';

const Login = () => {
        const [loginData, setLoginData] = useState({});
        const handleOnchange = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newLoginData = { ...loginData };
                newLoginData[field] = value;
                setLoginData(newLoginData);
        }
        const handleLogin = e => {
                e.preventDefault();
                alert('Hello')
        }
        return (
                <Container>
                        <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                        <Typography sx={{ mt: 15, textAlign: 'center', fontWeight: 600 }} variant='h4' gutterBottom>Login</Typography>
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
                                                <Button
                                                        type="submit"
                                                        sx={{ width: '80%', m: 2 }}
                                                        variant="contained">
                                                        Login
                                                </Button>
                                                <Typography variant="h6"
                                                        sx={{ width: '80%', m: 2 }}
                                                >New User?
                                                        <NavLink style={{ marginLeft: '5px' }} to="register">
                                                                Create New Account
                                                        </NavLink>
                                                </Typography>

                                        </form>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                        <img style={{ width: '100%' }} src={login} alt="" />
                                </Grid>
                        </Grid>
                </Container >
        );
};

export default Login;