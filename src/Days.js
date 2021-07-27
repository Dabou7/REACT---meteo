import React from 'react';
import './App.css';


const Weather= (props) => {
  
    return (
      <div className="App-days">
       <div className="card-action">
       <a onClick={() => props.getData(props.day)}  style={{fontWeight: 'bold'}}>{props.dayname}</a>

           {/*  <a href="{./Api.js}"></a>
            <a href="#">{props.day2}</a>
            <a href="#">{props.day3}</a>
    <a href="#">{props.day4}</a> */}
        </div> 

      </div>
    );
  }


export default Weather;





 