import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Button from '@material-ui/core/Button';
import phone from './images/phone.jpg';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        margin: "2%"
    },
    mobileRoot: {
        width: "100%"
    }
    ,
    media: {
        height: 300,
    },
});

function CardView() {
    const matches = useMediaQuery('(max-width:768px)');
    const classes = useStyles();
    return (
        <>
            <Card className={matches ? classes.mobileRoot : classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={phone}
                        title="iphone"
                    />
                    <CardContent>
                        <h2>Iphone</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea laborum, quo, libero obcaecati esse vel consectetur fugit tempora natus non maxime fugiat ex enim totam accusantium dicta velit laboriosam.</p>
                    </CardContent>
                </CardActionArea>

            </Card>
        </>
    )
}

export default CardView;
