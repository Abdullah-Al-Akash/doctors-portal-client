import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';
import Navigation from '../Shared/Navigation/Navigation';

const Login = () => {
        const [loginData, setLoginData] = useState({});
        const { loginUser, isLoading, user, authError, signinWithGoogle } = useAuth();
        const history = useHistory();
        const location = useLocation();

        const handleOnchange = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newLoginData = { ...loginData };
                newLoginData[field] = value;
                setLoginData(newLoginData);
        }
        const handleLogin = e => {
                e.preventDefault();
                loginUser(loginData.email, loginData.password, location, history);
        }

        // Handle Google Sign In:
        const handleGoogleSignIn = () => {
                signinWithGoogle(location, history)
        }
        return (
                <>
                        <Navigation></Navigation>
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
                                                {
                                                        isLoading &&
                                                        <CircularProgress />
                                                }
                                                {
                                                        user?.email &&
                                                        <Alert
                                                                sx={{ width: '80%', m: 2 }}
                                                                severity="success">User Login Successfully</Alert>
                                                }
                                                {
                                                        authError &&
                                                        <Alert
                                                                sx={{ width: '80%', m: 2 }}
                                                                severity="error">{authError}</Alert>

                                                }
                                                <Button
                                                        onClick={handleGoogleSignIn}
                                                        sx={{ width: '80%', m: 2 }}
                                                        variant="contained">
                                                        Google Sign In
                                                </Button>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                                <img style={{ width: '100%' }} src={login} alt="" />
                                        </Grid>
                                </Grid>
                        </Container >
                </>
        );
};

export default Login;