
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleCard from '../../Components/SingleCard/SingleCard';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import Genres from '../../Components/Genres/Genres';
import useGenres from '../../Hooks/useGenres';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Movies () {
    const classes = useStyles();
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreForURL = useGenres(selectedGenres);
    const [totalPages, setTotalPages] = useState(1);
    const fetchMovies = async () => {
        const _movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreForURL}`)
        setContent(_movies.data.results);
        setTotalPages(_movies.data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreForURL])

    return (
        <>
            <Typography variant="h1" align="center" color="secondary" component="h2" gutterBottom>
                Movies
            </Typography>
            <Genres media_type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPage={setPage} />
            <Grid container spacing={3} justifyContent="center" position="relative" className={classes.root}>
                {content.map((m) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={m.id} >
                            <SingleCard id={m.id} title={m.title || m.name} poster={m.poster_path || m.profile_path} average={m.vote_average || m.popularity} date={m.release_date || m.first_air_date} media_type={m.media_type} />
                        </Grid>
                    )
                })}
            </Grid>

            <CustomPagination setPage={setPage} pageCount={totalPages} />
        </>
    )
}