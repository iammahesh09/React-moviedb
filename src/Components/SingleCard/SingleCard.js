import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { img_300, unavailable } from '../../config';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    title: {
        fontSize: '16px',
    },
    media: {
        height: 450,
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    relative: {
        position: 'relative',
    },
    ratting: {
        position: 'absolute',
        top: '-40px',
        left: '10px',
        padding: '6px',
        borderRadius: '50%',
        fontSize: '16px',
        color: '#fff',
        minWidth: '20px',
        minHeight: '20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hight: {
        backgroundColor: '#1e9a20',
    },
    avg: {
        backgroundColor: '#f44336',
    }
});
export default function SingleCard ({ id, title, poster, average, date, media_type }) {
    const classes = useStyles();

    return (
        <Card className={`${classes.root}`}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image={poster ? `${img_300}/${poster}` : unavailable}
                    title={title}
                />
                <CardContent className={`${classes.relative}`}>
                    <Typography gutterBottom variant="h2" component="h2" className={`${classes.title}`}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={5} className={`${classes.capitalize}`} >
                                {media_type}
                            </Grid>
                            <Grid item xs={5} >
                                {date}
                            </Grid>
                        </Grid>
                    </Typography>
                    <div className={`${classes.ratting} ` + (average > 7 ? `${classes.hight}` : `${classes.avg}`)}>{average}</div>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
