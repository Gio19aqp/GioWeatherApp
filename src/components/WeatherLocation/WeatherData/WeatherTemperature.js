import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';


const WeatherTemperature =({temperature})=>{
    return(<div>
        <WeatherIcons name={'tsunami'} size ={"4x"}/>
        {temperature} °C
    </div>);
}

export default WeatherTemperature;