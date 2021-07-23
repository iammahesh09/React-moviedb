import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './TrendingCustomTab.css';

const useStyles = makeStyles((theme) => ({
    tabNav: {
        marginBottom: theme.spacing(2),
        flexGrow: 1,
        boxShadow: '1px 1px 10px #e0e5ff',
        backgroundColor: '#fff',
    },
    tab: {
        color: '#3f51b5',
        fontWeight: 'bold'
    }
}));

export default function TrendingCustomTab ({ media_type, trend_days }) {
    const [currentTab, setCurrentTab] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newTab) => {
        setCurrentTab(newTab);
        let mediaType = fetchedCategories.filter((category, index) => (newTab === index));
        media_type(mediaType[0]['media_type'])
    };
    const handleTrandingDays = (t) => {
        trend_days(t)
    }

    const fetchedCategories = [
        {
            label: "All",
            media_type: "all"
        },
        {
            label: "Movies",
            media_type: "movie"
        },
        {
            label: "TV Series",
            media_type: "tv"
        },
        {
            label: "Person",
            media_type: "person"
        }
    ];

    return (
        <div className="TabNavigation">
            <Tabs
                value={currentTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="Trending tabs"
                className={classes.tabNav}
            >
                {fetchedCategories.map((category) => (
                    <Tab key={category.label} label={category.label} className={classes.tab} />
                ))}
            </Tabs>
            <div className="trandingDays">
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="day" onChange={(e) => handleTrandingDays(e.target.value)}>
                        <FormControlLabel
                            value="day"
                            control={<Radio color="primary" />}
                            label="Day"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="week"
                            control={<Radio color="primary" />}
                            label="Week"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
}
