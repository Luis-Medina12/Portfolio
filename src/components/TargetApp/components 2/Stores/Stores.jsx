import React, {useEffect, useState} from "react";


const Stores = (storeData) =>{
    
    console.log(storeData.data)

    const [stores, setStores] = useState({
        distance: "",
        currentPrice: "",
        totalPrice: "",
        storeID: "",
        zipCode: "",
      });

      const handleStore = (event) => {
        const { name, value } = event.target;
        setStores((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

      handleStore(storeData.data);

      console.log(stores);
    
    return(
        <h1>Stores</h1>
    )
}

export default Stores;