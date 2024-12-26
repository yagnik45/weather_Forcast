import { createContext ,useContext ,useState} from "react";
import { getdataofcity } from "./api";
const WeatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
};

export const Weatherprovider=(props)=>{
    const[data,setData]=useState(null);
    const[searchcity,setSearchCity]=useState(null);

    const fetchdata=async()=>{
        const responce=await getdataofcity(searchcity);
        setData(responce);

    };
    return(
        <WeatherContext.Provider value={{searchcity,data,fetchdata,setSearchCity}}>
            {props.children}
        </WeatherContext.Provider>
    );
}