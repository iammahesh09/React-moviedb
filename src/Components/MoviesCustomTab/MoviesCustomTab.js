import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './MoviesCustomTab.css';

export default function MoviesCustomTab ({ media_type, trend_days }) {
    const handleTrandingDays = (t) => {
        trend_days(t)
    }

    return (
        <div className="TabNavigation">
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
