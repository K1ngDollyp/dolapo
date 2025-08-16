import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Container,
    Typography,
    Grid as MuiGrid,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Box,
    Button,
    Divider,
} from '@mui/material';
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';
import { CartItem } from '../types';

const Grid = styled(MuiGrid)``;

// Sample cart items (replace with your state management solution)
const sampleCartItems: CartItem[] = [
    {
        id: 1,
        name: 'Premium Notebook',
        description: 'High-quality notebook with 200 pages',
        price: 4.99,
        image: 'https://via.placeholder.com/300',
        category: 'Stationery',
        stock: 50,
        quantity: 2,
    },
    // Add more sample items as needed
];

const Cart = () => {
    const cartItems = sampleCartItems;

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
        // Implement quantity update logic
        console.log('Update quantity:', itemId, newQuantity);
    };

    const handleRemoveItem = (itemId: number) => {
        // Implement remove item logic
        console.log('Remove item:', itemId);
    };

    if (cartItems.length === 0) {
        return (
            <Container sx={{ py: 8 }}>
                <Typography variant="h5" align="center">
                    Your cart is empty
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" href="/products">
                        Continue Shopping
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {cartItems.map((item) => (
                        <Card key={item.id} sx={{ mb: 2 }}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={3} sm={2}>
                                        <CardMedia
                                            component="img"
                                            height="80"
                                            image={item.image}
                                            alt={item.name}
                                            sx={{ objectFit: 'contain' }}
                                        />
                                    </Grid>
                                    <Grid item xs={9} sm={4}>
                                        <Typography variant="h6">
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            ${item.price.toFixed(2)}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={4}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <IconButton
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            disabled={item.quantity <= 1}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography sx={{ mx: 2 }}>
                                            {item.quantity}
                                        </Typography>
                                        <IconButton
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            disabled={item.quantity >= item.stock}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={2}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Order Summary
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                }}
                            >
                                <Typography>Subtotal</Typography>
                                <Typography>
                                    ${calculateTotal().toFixed(2)}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                }}
                            >
                                <Typography>Shipping</Typography>
                                <Typography>Free</Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 2,
                                }}
                            >
                                <Typography variant="h6">Total</Typography>
                                <Typography variant="h6">
                                    ${calculateTotal().toFixed(2)}
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                            >
                                Proceed to Checkout
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;
