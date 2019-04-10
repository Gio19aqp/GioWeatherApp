import React, {Component} from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';


const WeatherData =()=>{
    return(<div>
        <WeatherTemperature temperature={35}/>
        <WeatherExtraInfo humidity = {20} wind= {12}/>
    </div>);
}

export default WeatherData;

