import React from 'react';
import './Navbar.css';
import NavMenu from './NavMenu';
// import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        width: "80%",
        borderBottom: "1px solid black"
    },
    mobileInput: {
        marginLeft: theme.spacing(1),
        width: "70%",
        borderBottom: "1px solid black"
    },
    iconButton: {
        padding: 10,
    },
    searchButton: {
        background: "black",
        color: "white",
        borderRadius: "50% 50%",
        padding: "0.5em"
    },
    cartIcon: {
        fontSize: "1.5em"
    }
}));


function Navbar() {
    const classes = useStyles();
    // const theme = useTheme();
    const matches = useMediaQuery('(max-width:768px)');

    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [drawerOpen, setDrawerOpen] = React.useState(false);
    // const handleDrawerOpen = () => {
    //     setDrawerOpen(true);
    // }
    // let open = false;
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true);
        // handleDrawer(true);
    }
    const handleDrawer = (a) => {
        a === false && setOpen(false);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <nav className="Navbar">
                <div className="nav-left">
                    <div className="nav-hamburger">
                        <IconButton color="inherit" key="menu" aria-label="menu-button" onClick={handleOpen}  >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className="nav-logo"><h1>logo</h1></div>
                </div>
                <div className="nav-center">
                    {/* <TextField id="standard-basic" label="Search" /> */}
                    <InputBase
                        placeholder="Search For Products" className={matches ? classes.mobileInput : classes.input}
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon className={classes.searchButton} />
                    </IconButton>
                </div>
                <div className="nav-right">
                    <div className="nav-user">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Sign In
                    </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    <div className="nav-cart">
                        <IconButton aria-label="cart">
                            <ShoppingCartIcon className={classes.cartIcon} />
                            <span className="cart-count">0</span>
                        </IconButton>
                    </div>
                </div>


            </nav>
            <NavMenu handleDrawer={handleDrawer} open={open} />

        </>
    )
}

export default Navbar
