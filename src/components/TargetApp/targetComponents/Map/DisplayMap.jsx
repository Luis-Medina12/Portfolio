import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import HomeIcon from '@material-ui/icons/Home'
import { Rating } from "@material-ui/lab";
import './styles.css'

import useStyles from './styles';

const DisplayMap = ({setCoordinates, setBounds, coordinates, stores, home}) => {
    const classes = useStyles();
    const coords = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
          },
          zoom: 11
    };

    const defaultProps = {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng
        },
        zoom: 11
      };

      console.log("inside mapThing")

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact 
                bootstrapURLKeys = {{key: "AIzaSyCGPvCgakdnPuYTOKSMI1cUE7FcdcU-oQ0"}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50,50,50,50]}
                options={""}
                onChange = {(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    
                }}
                onChildClick={""}
            >
                {/* {home!= null &&
                    <div 
                        className={classes.markerContainer}
                        lat = {home.lat}
                        lng = {home.lng}
                    >
                        <HomeIcon color="primary" fontSize="large"/>
                    </div>} */}
                {/* {stores?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat = {place.lat}
                        lng = {place.lon}
                        key = {i}
                    >
                        
                        <Typography className={classes.typography} variant="subtitle1" gutterBottom>
                            <LocationOnOutlineIcon color="primary" fontSize="large"></LocationOnOutlineIcon>
                            {place.storeName}
                            <br></br>
                            {place.distance + "miles"}
                        </Typography>
                        
                    </div>
                ))} */}
                
                
            </GoogleMapReact>

            {/* <div >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCGPvCgakdnPuYTOKSMI1cUE7FcdcU-oQ0" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <div 
                        className={classes.markerContainer}
                        lat = {home.lat}
                        lng = {home.lng}
                        >
                        <HomeIcon color="primary" fontSize="large"/>
                    </div>
                </GoogleMapReact>
            </div> */}
        </div>
    )
}

export default DisplayMap;