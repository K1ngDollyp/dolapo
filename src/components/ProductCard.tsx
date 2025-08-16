import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
    Box,
} from '@mui/material';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', p: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                    {product.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {product.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" color="primary">
                        ${product.price.toFixed(2)}
                    </Typography>
                    <Typography
                        variant="caption"
                        color={product.stock > 0 ? 'success.main' : 'error.main'}
                    >
                        {product.stock > 0
                            ? `${product.stock} in stock`
                            : 'Out of stock'}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    fullWidth
                    variant="contained"
                    onClick={() => onAddToCart(product)}
                    disabled={product.stock === 0}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
