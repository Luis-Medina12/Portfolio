import {zips} from './TaxData';
import axios from 'axios';
 
// takes in a tcin, zip, and distance from user
// will return promise containing store location data
const rapidKey= "1228b2b23cmshd71c006bb9b2f87p10f329jsn254830057226";
export const getStores = async (zip, distance) =>{
    
  try {
    const response = await axios.get(`https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search`, {
      params: {zip: zip, radius: distance},
      headers: {
        'X-RapidAPI-Key': rapidKey,
        'X-RapidAPI-Host': 'target-com-store-product-reviews-locations-data.p.rapidapi.com'
      },
    })

    return response.data;
  } catch (error) {
    console.log(error);
  }
    
}

export const getProduct = async (tcin, storeID) =>{

  try {
    const response = await axios.get(`https://target1.p.rapidapi.com/products/v3/get-details`, {
      params: {tcin: tcin, store_id: storeID},
      headers: {
        'X-RapidAPI-Key': rapidKey,
        'X-RapidAPI-Host': 'target1.p.rapidapi.com'
      },
    })

    return response.data;
  } catch (error) {
    console.log(error);
  }

}

// Map tax rates on initial render for easy access
const taxRates = new Map();
for(const city of zips.data)
  {
    taxRates.set(city.zip, city.combined_rate);
  }

export const getTaxRate = (zip) =>{
  return taxRates.get(zip);
}