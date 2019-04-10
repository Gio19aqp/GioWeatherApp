import React, {Component} from 'react';


const WeatherExtraInfo =({humidity,wind})=>{
    return(<div>
        {`Humadad: ${humidity} %`}
        {`Viento: ${wind} m/s`}
    </div>);
}

export default WeatherExtraInfo;

