import React from 'react';
import './Services.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
        {
                id: 1,
                name: 'Fluoride Treatment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus dolores quaerat corporis officiis dicta voluptatem aperiam, natus fugit sequi',
                img: fluoride
        },
        {
                id: 2,
                name: 'Cavity Feeling',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus dolores quaerat corporis officiis dicta voluptatem aperiam, natus fugit sequi',
                img: cavity
        },
        {
                id: 3,
                name: 'Teeth Whitening',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus dolores quaerat corporis officiis dicta voluptatem aperiam, natus fugit sequi',
                img: whitening
        }
]

const Services = () => {
        return (
                <Box sx={{ flexGrow: 1 }}>
                        <Container>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                                        {
                                                services.map(service => <Service
                                                        key={service.id}
                                                        service={service}
                                                >
                                                </Service>)
                                        }
                                </Grid>
                        </Container>
                </Box>
        );
};

export default Services;