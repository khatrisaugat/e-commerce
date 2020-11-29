import React from 'react';
import './ProductCatalog.css';
import CardView from './CardView';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import phone from './images/phone.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        height: 500
    },
    mobileRoot: {
        display: "inline-block",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    gridList: {
        flexWrap: 'nowrap'
    }
}));
const tileData = [
    {
        img: phone,
        title: 'title'
    },
    {
        img: phone,
        title: 'title'
    },
    {
        img: phone,
        title: 'title'
    },
    {
        img: phone,
        title: 'title'
    }
];


function ProductCatalog() {
    const matches = useMediaQuery('(max-width:768px)');
    // const slider = () => {
    //     const catalog = document.getElementById('catalog');
    //     catalog.classList.add("slidingCatalog");
    // }
    // if (matches) {
    //     slider();
    // }


    const classes = useStyles();
    return (
        <>
            {/* <Container maxWidth="lg" className={matches ? classes.mobileRoot : classes.root} id="catalog">
                <CardView />
                <CardView />
                <CardView />
                <CardView />
            </Container> */}
            <Container maxWidth="lg" className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map((tile, i) => (

                        // <GridListTile key={tile.img + i}>
                        <CardView image={tile.img} alt={tile.title} key={tile.title + i} />))}
                    {/* <asdnkljsd />
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                            /> */}
                    {/* </GridListTile> */}

                </GridList>
            </Container>

        </>
    )
}

export default ProductCatalog;
