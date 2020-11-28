import React from 'react';
import CardView from './CardView';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

function ProductCatalog() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="lg" className={classes.root}>
                <CardView />
                <CardView />
                <CardView />
                <CardView />
            </Container>

        </>
    )
}

export default ProductCatalog;
