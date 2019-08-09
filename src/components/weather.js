import React, {Component} from 'react';


function ktof(kelvin){
    const res = kelvin * 9 / 5 - 459.67;
    return res.toFixed(0)
}

function ktoc(kelvin){
    const res = kelvin - 273.15;
    return res.toFixed(0)
}

function kphtomph(kph){
    const res = kph / 1.609344;
    return res.toFixed(0)
}

// hairDay=humidity=>{
//     // const res = humidity(num)
//     if (humidity <= 50) {
//     return "Very good."
//     }
//     if (humidity >= (51 && 74)){
//     return "Not so good"  
//     }

//     if (humidity >= (75 && 95)){
//         return "Challenging"   
//         }

//     if (humidity >= (96 && 100)) {
//          return "Dangerous- hat or ponytail advised"   
//             }


// }

const Weather = props=> (

    
        <div>
        {props.city && props.country && 
        <p><center>Location: {props.city}, {props.country}</center></p>}
               
        <div class = "container">
        <h2 style={{backgroundColor: "lightblue"}}>Temperature:</h2>
        {props.temperature && <p>Fahrenheit: {ktof(props.temperature)}F</p>}
        {props.temperature && <p>Celsius: {ktoc(props.temperature)}C</p>}
        {props.temperature && <p>Kelvin: {(props.temperature)}K</p>}
        <h2 style={{backgroundColor: "beige"}}>Conditions:</h2>
        {props.humidity && <p>Humidity: {props.humidity} %</p>}
        {props.wind && <p>Wind speed: {kphtomph(props.wind)}mph</p>}
        {props.description &&<p>{props.description}</p>}
        {props.hairDay &&<p>What kind of hair day? {props.hairDay}</p>}
        {props.error &&<p>{props.error}</p>}
        </div>
        </div>
    
    );

   

    export default Weather;