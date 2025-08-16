import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    useTheme,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import {
    ShoppingCart as ShoppingCartIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'Products', path: '/products' },
        { text: 'Categories', path: '/categories' },
    ];

    const renderMobileMenu = () => (
        <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        component={Link}
                        to={item.path}
                        key={item.text}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    School Store
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            component={Link}
                            to="/cart"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <Badge badgeContent={0} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        {renderMobileMenu()}
                    </>
                ) : (
                    <>
                        {menuItems.map((item) => (
                            <Button
                                color="inherit"
                                component={Link}
                                to={item.path}
                                key={item.text}
                                sx={{ mx: 1 }}
                            >
                                {item.text}
                            </Button>
                        ))}
                        <IconButton component={Link} to="/cart" color="inherit">
                            <Badge badgeContent={0} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
