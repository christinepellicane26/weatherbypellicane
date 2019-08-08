import React, {Component} from 'react';

function ktof(kelvin){
    const res = kelvin * 9 / 5 - 459.67;
    return res.toFixed(0)
}

function ktoc(kelvin){
    const res = kelvin - 273.15;
    return res.toFixed(0)
}

const Weather = props=> (

    
        <div>
        {props.city && props.country && 
        <p>Location: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperature in Fahrenheit: {ktof(props.temperature)}F</p>}
        {props.temperature && <p>Temperature in Celsius: {ktoc(props.temperature)}C</p>}
        {props.temperature && <p>Temperature in Kelvin: {(props.temperature)}K</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description &&<p>Conditions: {props.description}</p>}
        {props.error &&<p>{props.error}</p>}
        </div>
    );

   

    export default Weather;