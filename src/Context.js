import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Kolkāta", 
            "lat": "22.5411", 
            "lng": "88.3378", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "West Bengal", 
            "capital": "admin", 
            "population": "17560000", 
            "population_proper": "4496694"
          },
          current:'',
          daily:''
    })

    
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}