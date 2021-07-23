import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';

const useStyles = makeStyles({
    root: {
        width: 500,
        margin: '0 auto',
        fontSize: '1rem',
        backgroundColor: '#032541',
        '& span': {
            color: '#eee',
        },
    },
    header: {
        backgroundColor: '#032541',
        color: "#fff",
    },
});

export default function MainNavigation () {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push('/');
        else if (value === 1) history.push('/movies');
        else if (value === 2) history.push('/series');
        else if (value === 3) history.push('/search');
    }, [value, history]);

    return (
        <>
            <header className={`${classes.header}`}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                    <BottomNavigationAction label="Movies" icon={<MovieCreationOutlinedIcon />} />
                    <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
                    {/* <BottomNavigationAction label="Search" icon={<SearchIcon />} /> */}
                </BottomNavigation>
            </header>
        </>
    );
}
