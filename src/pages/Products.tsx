import React, { useState } from 'react';
import {
    Container,
    Grid as MuiGrid,
    Typography,
    TextField,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Pagination,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Grid = styled(MuiGrid)``;
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Sample product data (you can replace this with your API call)
const sampleProducts: Product[] = [
    {
        id: 1,
        name: 'Premium Notebook',
        description: 'High-quality notebook with 200 pages, perfect for taking notes in class.',
        price: 4.99,
        image: 'https://placeholder.com/300',
        category: 'Stationery',
        stock: 50,
    },
    {
        id: 2,
        name: 'Scientific Calculator',
        description: 'Advanced scientific calculator with all functions needed for math and science classes.',
        price: 19.99,
        image: 'https://placeholder.com/300',
        category: 'Electronics',
        stock: 30,
    },
    // Add more sample products here
];

const ITEMS_PER_PAGE = 12;

const Products = () => {
    const Item = styled('div')(({ theme }) => ({}));
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [page, setPage] = useState(1);

    // Filter products based on search term and category
    const filteredProducts = sampleProducts.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
            category === 'all' || product.category.toLowerCase() === category;
        return matchesSearch && matchesCategory;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const currentProducts = filteredProducts.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    const handleAddToCart = (product: Product) => {
        // Implement add to cart functionality
        console.log('Added to cart:', product);
    };

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Our Products
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Grid container spacing={2} alignItems="center" component="div">
                    <Grid item xs={12} md={6} component="div">
                        <TextField
                            fullWidth
                            label="Search Products"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} component="div">
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={category}
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value="all">All Categories</MenuItem>
                                <MenuItem value="stationery">Stationery</MenuItem>
                                <MenuItem value="electronics">Electronics</MenuItem>
                                <MenuItem value="books">Books</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={4} component="div">
                {currentProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} component="div">
                        <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    </Grid>
                ))}
            </Grid>

            {totalPages > 1 && (
                <Box
                    sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        color="primary"
                    />
                </Box>
            )}
        </Container>
    );
};

export default Products;
