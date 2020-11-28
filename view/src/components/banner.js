import React from 'react';
import './Banner.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import banner from './images/banner.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "75px",

    },
    banner: {
        maxHeight: "70vh"
    }
}));

function Banner() {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Paper className={classes.banner}><img src={banner} alt="black friday Sale" width="100%" className={classes.banner} /></Paper>

            </Grid>
            <Container maxWidth="lg">

                {/* <div className="Banner"> */}

                <h2>Let's start</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint rem, dolorem fuga voluptatem quis commodi amet, nemo quisquam temporibus excepturi recusandae illo eum eos, blanditiis est expedita aliquam vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur minima, voluptates maiores officiis nostrum excepturi odio, illo omnis doloribus eius est possimus quidem optio autem odit quos debitis sapiente?</p>


                {/* </div> */}
            </Container>
        </>
    )
}

export default Banner
