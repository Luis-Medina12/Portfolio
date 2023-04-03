import { ArtTrackSharp } from '@material-ui/icons';
import axios from 'axios';
import { json } from 'react-router-dom';

// This uses the API version of this program
export const getPlacesData = async (zip, tcin, distance) => {
    const URL = 'https://39f2e981-9f91-4933-8cd2-8f03aeb31831.mock.pstmn.io/fakeResults4';
    try{
        const response = axios.get(URL, {
            params: {
              zip: zip,
              tcin:tcin,
              distance:distance,
              
            }
        });

        var data = await response;
        console.log(data.data);

        return data.data;

    } catch(error){
        console.log(error);


    }
}

export const getStoreData = async () => {

    const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/stores';
    try{
        const data  = await axios.get(URL);
        console.log(JSON.stringify(data));
        console.log(data);
        return data;

    } catch(error){
        console.log(error);

    }
}

export const getProductData = async () => {

    const URL = 'https://8031d83b-398e-47cb-a622-9a364682a8e3.mock.pstmn.io/product';
    try{
        const data  = await axios.get(URL);

        return data;

    } catch(error){
        console.log(error);

    }
}


export const getTaxData = async (zipCode) => {

    const URL = 'https://api.apilayer.com/tax_data/tax_rates';
    try{
        const {data: {data}}  = await axios.get(URL, {
            params: {
                zip: zipCode,
                country: 'us',
            },
            headers:{
                'apikey': 'XiMp01C5PA5s6amWAZH98ewXyDIJ9eUm',
            }
        });
        

        return data;

    } catch(error){
        console.log(error);

    }
}