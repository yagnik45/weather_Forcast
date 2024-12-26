import React from "react";
import { useWeather } from "../weather";

const Input =()=>{
    const weather=useWeather();
    console.log(weather);

    return(
        <input className="input-field" 
        placeholder="search here"
        value={weather.searchcity} 
        onChange={(e)=>weather.setSearchCity(e.target.value)} />
    );

};
export default Input;