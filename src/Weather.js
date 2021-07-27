import React from 'react';
import './App.css';


const Weather= (props) => {
  
    return (
      <div className="App-weather">
        <div className="card-content white-text">
             <span className="card-title">{props.city}</span>
             <p><img src={props.iconID} alt="logo"/></p>
             <span className="temperature">{props.temperature}°C</span>
             <div className="wind">Vent {props.speedWind}km/h ({props.degWind}°)</div>
             <div>{props.lat}/{props.lon}</div>
             
    {/* <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/> */}
         </div> 

      </div>
    );
  }


export default Weather;
