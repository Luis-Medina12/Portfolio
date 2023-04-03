import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles';

const List = (data, currLocation) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('0');
    return (
        <div className = {classes.container}>
            <Typography className={classes.results} variant = "h4" align="center">Locations Found With Item In-stock</Typography>
            <br></br>
            <Grid container spacing = {3} className = {classes.list}>
                {data.store?.map((store, i) => (
                    <Grid item key = {i} xs = {12} >
                        <PlaceDetails store ={store} currLoc = {data.currLocation}/>
                    </Grid>

                ))}

            </Grid>

        </div>
    )
}

export default List;