import React from 'react';
import {
    Container,
    Typography,
    Grid as MuiGrid,
    Paper,
    Box,
    Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Grid = styled(MuiGrid)``;

const Home = () => {
    return (
        <Container>
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                }}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Welcome to School Store
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Your one-stop shop for all school materials. We offer high-quality
                    supplies at competitive prices to help you succeed in your
                    educational journey.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/products"
                        size="large"
                        sx={{ mr: 2 }}
                    >
                        Browse Products
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/products"
                        size="large"
                    >
                        View Categories
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Wide Selection
                        </Typography>
                        <Typography align="center" color="text.secondary">
                            From notebooks to calculators, find everything you need
                            for school in one place.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Quality Products
                        </Typography>
                        <Typography align="center" color="text.secondary">
                            We source only the best quality materials to ensure your
                            academic success.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Fast Delivery
                        </Typography>
                        <Typography align="center" color="text.secondary">
                            Get your supplies quickly with our efficient delivery
                            service.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
