import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleCard from '../../Components/SingleCard/SingleCard';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import TrendingCustomTab from '../../Components/TrendingCustomTab/TrendingCustomTab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    tabNav: {
        margin: theme.spacing(2),
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function Trending () {
    const classes = useStyles();
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const [media, setMedia] = useState('all');
    const [trend, setTrend] = useState('day');

    const fetctTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${media}/${trend}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        setContent(data.results);
    }

    useEffect(() => {
        fetctTrending();
        // eslint-disable-next-line
    }, [page, media, trend])


    return (
        <>
            <Typography variant="h1" align="center" color="primary" component="h2" gutterBottom>
                Trending
            </Typography>
            <TrendingCustomTab media_type={setMedia} trend_days={setTrend} />
            <Grid container spacing={3} justifyContent="center" position="relative" className={classes.root}>
                {content.map((t) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={t.id} >
                            <SingleCard id={t.id} title={t.title || t.name} poster={t.poster_path || t.profile_path} average={t.vote_average || t.popularity} date={t.release_date || t.first_air_date} media_type={t.media_type} />
                        </Grid>
                    )
                })}
            </Grid>
            <CustomPagination setPage={setPage} />
        </>
    )
}