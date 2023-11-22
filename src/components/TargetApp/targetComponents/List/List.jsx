import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = (data, currLocation) => {
    return (
        <div className = "container-list">
            <Typography className="results-list" variant = "h4" align="center">Locations Found With Item In-stock</Typography>
            <br></br>
            <Grid container spacing = {3} className = "results-list">
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