import React, { useEffect } from 'react'
import { makeStyles, Chip } from '@material-ui/core';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#fbfbfb',
        padding: '15px 10px',
        marginBottom: '20px',
        boxShadow: '1px 1px 10px #c3c3c3',
        '& > *': {
            margin: theme.spacing(0.5),
            fontSize: '16px',
        },
    },
}));

function Genres ({ media_type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) {
    const classes = useStyles();
    const feachGenres = async () => {
        const _genres = await axios.get(`https://api.themoviedb.org/3/genre/${media_type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(_genres.data.genres)
    }

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(g => g.id !== genre.id));
        setPage(1);
    }

    const handleDelete = (genre) => {
        setSelectedGenres(
            selectedGenres.filter(g => g.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    useEffect(() => {
        feachGenres();
        return () => {
            setGenres({})
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.root}>
            {
                selectedGenres && selectedGenres.map((g) => {
                    return (
                        <Chip key={g.id} label={g.name} color="primary" style={{ margin: 2 }} clickable onDelete={() => handleDelete(g)} />
                    )
                })
            }
            {
                genres && genres.map((g) => {
                    return (
                        <Chip key={g.id} label={g.name} variant="outlined" color="primary" style={{ margin: 2 }} clickable onClick={() => handleAdd(g)} />
                    )
                })
            }
        </div>
    )
}

export default Genres;
