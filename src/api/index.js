const BaseUrl="https://api.weatherapi.com/v1/current.json?key=dd085c3bda544652b1842948242010"
export const getdataofcity=async(city)=>{
    const responce=await fetch(`${BaseUrl}&q=${city}&aqi=yes`);
    return await responce.json();
};