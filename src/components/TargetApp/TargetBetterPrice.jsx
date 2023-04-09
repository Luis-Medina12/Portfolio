import React, {useEffect, useState} from "react";
import List from "./components 2/List/List";
import Map from "./components 2/Map/Map";
import useStyles from './components 2/Headers/styles'
import { Autocomplete, Data } from "@react-google-maps/api";
import { Toolbar, AppBar, Typography, InputBase, Box, Button, CssBaseline, Grid } from "@material-ui/core";
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import {getStores, getProduct} from "./components 2/dataManagement/Data";
import Instructions from "./components 2/Instructions/Instructions";
import { productResp} from './components 2/dataManagement/ProductData';
import { locationsResp } from "./components 2/dataManagement/LocationData";
import {getTaxRate} from './components 2/dataManagement/Data'
import axios from 'axios';

function OutputData(address, storeName, price, distance, taxrate, lon, lat){
    this.address = address;
    this.storeName = storeName;
    this.price = price;
    this.distance = distance;
    this.taxrate = taxrate;
    this.lon = lon;
    this.lat = lat;
}

function TargetBetterPrice() {

  const classes = useStyles();
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const [testData, setTest] = useState();

  const [home, setHome] = useState(null);

  const [input, setInput] = useState({
    zip:null,
    distance:null,
    tcin:null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const handleReset = (event) =>{
    event.preventDefault();
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    if(Object.values(input).includes(null) ||Object.values(input).includes('')){
      alert("Enter all fields");
    }
    else{

      const stores = [];
      // Use user input to fetch store location data of stores with product
      
      //const apiData = getStores(input.zip, input.distance); pull from API

      const apiData = locationsResp;

      // process the promise returned by getStores()
      //apiData.then(data => {
        //for(const store of data.locations)
        for(const store of apiData.locations)
        {
          //const productResponse = getProduct(input.tcin, store.location_id);
          const productResponse = productResp;
          //productResponse.then(product => {
            
            //if(product.data.product.fulfillment.store_options[0].order_pickup.availability_status === 'IN_STOCK')
            {
              const info = new OutputData(store.address.address_line1, 
                store.location_names[0].name, 
                productResponse.product.price.current_retail, 
                store.distance, 
                getTaxRate(store.address.postal_code.substring(0,5)), // for now will use pre-set tax data
                store.geographic_specifications.longitude, 
                store.geographic_specifications.latitude);
              
              stores.push(info);
            }
            // else{
            //   console.log("not in stock")
            // }
          //})
        };
    
        stores.sort((a,b) => a.price - b.price);
        console.log(stores);
  
        setResponseData(stores);
      //})


    }
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) =>{
      setCoordinates({lat: latitude, lng: longitude});
    })

  }, []);


  return (
    <>
    <div className="targetResultsPage">
    <nav className="NavBarTarget"> 
        <div className="TargetName">
          <MoneyOffIcon fontSize="large"/>
            <div >Target Better Price</div>
          <MoneyOffIcon fontSize="large"/>
        </div>

        <div>  
            <input
              placeholder = "TCIN"
              type="number"
              name="tcin"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Home Zip"
              type="number"
              name="zip"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Distance"
              type="number"
              name="distance"
              onChange={handleInputChange}
              className= "inputBox"
            />

            <button onClick = {handleSubmit}> 
              Submit
            </button>

            <button onClick = {handleReset}> 
              Reset
            </button>

          </div>
    </nav>

    {responseData.length === 0 && <Instructions/>}

    
      <Grid container spacing={2} style = {{width: '100%'}}>
        <Grid md = {2}></Grid>
        <Grid item xs={12} md={8}>
          {responseData.length!== 0 &&
            <List store = {responseData}
            currLocation = {coordinates}
            />
          }
        </Grid>
        <Grid md = {2}></Grid>

        {/* leaving map out for now, bug is causing it to crash */}

        {/* //TODO: fix bug causing crash when loading map */}
        
        {/* <Grid item xs={12} md = {7}>
        {responseData.length!== 0 &&
            <Map
            setCoordinates={setCoordinates}
            setBounds = {setBounds}
            coordinates = {coordinates}
            stores = {responseData}
            home = {home}/>
          }
        </Grid> */}
      </Grid>
    </div>

    </>
  )
}

export default TargetBetterPrice;