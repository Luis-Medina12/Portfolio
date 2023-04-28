import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import {Toolbar, AppBar, Typography, InputBase, Box, Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import styles from "./styles.css";
import {getPlacesData} from '../api/index';
import Stores from '../Stores/Stores'

const Header = () => {
    const classes = useStyles();

    const [input, setInput] = useState({
        zip: "",
        tcin: "",
        distance: "",
          
      });

      const [stores, setStores] = useState({
        distance: "",
        currentPrice: "",
        totalPrice: "",
        storeID: "",
        zipCode: "",
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

      const handleStore = (event) => {
        const { name, value } = event.target;
        setStores((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit hit");
        console.log(input);
        getPlacesData(input)
            .then((response) => {
                const data =response;
                Stores(data);
            })
      };

    return (
        <AppBar position="static">
            <Toolbar className = {classes.toolbar}>
                <Typography variant="h4" className = {classes.title}>
                    <MoneyOffIcon/>
                    Target Better Price
                    <MoneyOffIcon/>
                </Typography>
                <Box display = "flex">
                        <div clasName = {classes.search}>
                        <SearchIcon/>
                            
                        <input
                        placeholder = "TCIN"
                        type="number"
                        name="tcin"
                        value={input.tcin}
                        onChange={handleInputChange}
                        className= "inputBox"
                        />
                      
                        <input
                        placeholder = "Home Zip"
                        type="number"
                        name="zip"
                        value={input.zip}
                        onChange={handleInputChange}
                        className= "inputBox"
                        />
                      
                        <input
                        placeholder = "Distance"
                        type="number"
                        name="distance"
                        value={input.distance}
                        onChange={handleInputChange}
                        className= "inputBox"
                        />
                        <Button variant="outlined" color="default" className={classes.submit} onClick = {handleSubmit}> Submit</Button>  
                        </div>
                        
                    
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header;







{/* <InputBase placeholder = "TCIN" 
    id = 'tcin' 
    classes = {{root: classes.inputRoot, input: classes.inputInput}}
    type = 'number'
    //value={input.tcin}
    //onChange={handleInputChange}
    />
<InputBase placeholder = "Distance" 
    id = 'distance' 
    classes = {{root: classes.inputRoot, input: classes.inputInput}}
    type = 'number'
    value={input.tcin}
    onChange={handleInputChange}
    />
<InputBase placeholder = "Home Zip" 
    id = 'zip' 
    classes = {{root: classes.inputRoot, input: classes.inputInput}}
    type = 'number'
    value={input.tcin}
    onChange={handleInputChange}
    /> */}