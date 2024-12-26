import React from "react";
import { useWeather } from "../weather";
const Card=()=>{
    const weather=useWeather();
    return(
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="{weather?.data?.current?.condition?.text}" />
            <h1>{weather?.data?.location?.name},{weather?.data?.location?.region},{weather?.data?.location?.country}</h1>
            <h2>{weather?.data?.current?.temp_c}C</h2>
            

        </div>
    );

};

export default Card;