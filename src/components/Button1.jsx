import React from "react";
const Button1=(props)=>{
    return(
        <button className="btn" onClick={props.onClick}>{props.value}</button>
    );
};
export default Button1;