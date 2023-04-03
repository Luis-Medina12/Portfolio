import React, {useEffect, useState} from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


// TODO: -  Cards are looking good layout-wise, but still need to do some tweaking to the way they look
//       -  Need to bring in more data from the API: Store Name, address, coordinates would be nice, maybe picture??.
//              - Dont really need the original price or zip code.... maybe not even the store ID tbh



// TODO: - Need to actually connect to API OR get a bunch of data from API and use using PostMan
//       - Need to handle edge cases: too many results? no results? 
//       - Need to add in error handling

// Target API can return a store's lat and lon, full address, store name
// Mclellan Manor Townhouse, W McLellan Blvd, Phoenix, AZ 85017
// 


const PlaceDetails = ({store, currLoc}) => {

    const data = JSON.parse(JSON.stringify(store));
    const classes = useStyles();

    const URL = 'https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/'+
                'uploads/2020/08/932/524/New-Target-Orlando27.jpg?ve=1&tl=1';

    return (
        <Card elevation = {6}>
            <CardMedia
                style = {{height:140}}
                title = {data.storeID}
                image ={URL}
                />
            <CardContent>
                <Typography gutterBottom className = {classes.storeName}>{data.storeName}</Typography>
                <Box display="flex" justifyContent= "space-between" >
                    <Typography className = {classes.info}>Total Price</Typography>
                    <Typography gutterBottom 
                                className = {classes.results} 
                                align="justify">
                        ${(data.price+(data.price*data.taxrate)).toFixed(2)}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent= "space-between" my={2}>
                    <Typography className = {classes.info}>Travel Distance</Typography>
                    <Typography gutterBottom 
                                className = {classes.results} 
                                align="justify">
                        {data.distance} miles
                        </Typography>
                </Box>
                
                {/* <Box display="flex" justifyContent= "space-between" >
                    <Typography variant="h6">Address</Typography>
                    <Typography gutterBottom variant="subtitle1" align="justify">{data.address}</Typography>
                </Box> */}
                <Typography gutterBottom variant="h6" className={classes.subtitle}>
                    <LocationOnIcon fontSize="small"/>
                    <Typography gutterBottom 
                        className = {classes.results} 
                        align="justify">
                        <a href={"https://www.google.com/maps/dir/?api=1&origin="+currLoc.lat+","+currLoc.lng+"&destination="+encodeURIComponent(data.address)} target="_blank">{data.address}</a>
                    </Typography>
                    
                </Typography>
                
            </CardContent>

        </Card>
    )
}

export default PlaceDetails;