import React, {useEffect, useState} from "react";
import List from "./targetComponents/List/List";
import DisplayMap from "./targetComponents/Map/DisplayMap";
// import { Autocomplete, Data } from "@react-google-maps/api";
import { Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { getStores, getProduct, getTaxRate } from "./targetComponents/dataManagement/Data";
import Instructions from "./targetComponents/Instructions/Instructions";
import { productResp} from './targetComponents/dataManagement/ProductData';
import { locationsResp } from "./targetComponents/dataManagement/LocationData";
import { Helmet } from "react-helmet";

function OutputData(address, storeName, price, distance, taxrate, lon, lat){
    this.address = address;
    this.storeName = storeName;
    this.price = price;
    this.distance = distance;
    this.taxrate = taxrate;
    this.lon = lon;
    this.lat = lat;
}


// ! TODO: need to fix bugs causing it to crash and use semantic elements

function TargetBetterPrice() {

//   const classes = useStyles();
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
    setResponseData([]);
    document.getElementById("tcin").data = '';
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
    <Helmet><title>Target Better Price</title></Helmet>

    <div className="targetResultsPage">

    <nav className="NavBarTarget"> 
        
        <div className="TargetName">
            <div >Target Better Price</div>
        </div>

        <div>
         <input
              placeholder = "TCIN"
              type="number"
              name="tcin"
              id="tcin"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Home Zip"
              type="number"
              name="zip"
              id="zip"
              onChange={handleInputChange}
              className= "inputBox"
            />
          
            <input
              placeholder = "Distance"
              type="number"
              name="distance"
              id="distance"
              onChange={handleInputChange}
              className= "inputBox"
            />

            <button onClick={handleSubmit}> 
              Submit
            </button>

            <button onClick={handleReset}> 
              Reset
            </button> 

          </div> 
          
    </nav> 

    {responseData.length === 0 && <Instructions/>}

      <Grid container spacing={2} style = {{width: '100%'}}>
        <Grid md = {1}></Grid>
        <Grid item xs={12} md={10}>
          {responseData.length!== 0 &&
            <List store = {responseData}
            currLocation = {coordinates}
            />
          }
        </Grid>
        <Grid md = {1}></Grid>

        {/* leaving map out for now, bug is causing it to crash */}
        
        {/* <Grid item xs={12} md = {7}>
        {responseData.length!== 0 &&
            <DisplayMap
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