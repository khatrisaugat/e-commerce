import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Button from '@material-ui/core/Button';
// import phone from './images/phone.jpg';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';


// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        margin: "2%"
    },
    mobileRoot: {
        width: "90%"
    }
    ,
    media: {
        height: 300,
    },
});

function CardView(props) {
    const matches = useMediaQuery('(max-width:768px)');
    const classes = useStyles();
    if (matches) {
        return (
            <>
                <GridListTile>

                    <Card className={matches ? classes.mobileRoot : classes.root}>
                        <CardActionArea>

                            <CardMedia
                                className={classes.media}
                                image={props.image}
                                title={props.title}
                            />

                            <CardContent>
                                <h2>Iphone</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </GridListTile>
            </>
        )
    } else {
        return (
            <>
                {/* <GridListTile> */}

                <Card className={matches ? classes.mobileRoot : classes.root}>
                    <CardActionArea>

                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title={props.title}
                        />

                        <CardContent>
                            <h2>Iphone</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </CardContent>
                    </CardActionArea>

                </Card>
                {/* </GridListTile> */}
            </>
        )
    }

}

export default CardView;
