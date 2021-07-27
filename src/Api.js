import React,{useState, useEffect} from "react";
import Weather from './Weather';
import sun from './icons/sun.svg';
import cloudy from './icons/cloudy.svg';
import cloudySun from './icons/cloudy-sun.svg';
import thunder from './icons/thunder.svg';
import windy from './icons/windy.svg';
import rainy from './icons/rainy.svg';
import snowy from './icons/snowy.svg';
import Days from './Days';
import moment from 'moment';

const Api= () => {
    const key = '2d8144a45e8f358631422d3484d5ad8b';
    const [city,setCity] = useState('');
    const [temperature,setTemperature] = useState('');
    const [degWind,setDegWind] = useState('');
    const [speedWind,setSpeedWind] = useState('');
    const [iconID,setIconID] = useState('');
    const [day, setDay] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');



    const picture ={
        'Clear' : sun,
        'Rain' : rainy,
        'Snow' : snowy,
        'Atmosphere' : windy,
        'Drizzle' : cloudySun,
        'Thunderstorm' : thunder,
        'Clouds' : cloudy,
    }

    const getData = (index = 0)=> {
        fetch(
            'http://api.openweathermap.org/data/2.5/forecast?lat=50&lon=4,&units=metric&APPID=2d8144a45e8f358631422d3484d5ad8b'
            )
        .then((res) => res.json())
        .then((data) => {
        setCity(data.city.name);
        setTemperature(Math.round(data.list[index].main.temp));
        setDegWind(data.list[index].wind.deg);
        setSpeedWind(Math.round(data.list[index].wind.speed)*3.6);
        setIconID(picture[data.list[index].weather[0].main]);
        setDay(moment(data.list[index].dt_txt).format('dddd'))   
        setLat(data.city.coord.lat)
        setLon(data.city.coord.lon)
        console.log(data.city.coord.lat);
        })}

    useEffect(()=> { getData()},[])

    return (
    
        <div>
        <Weather city={city} temperature={temperature} degWind={degWind} speedWind={speedWind} iconID={iconID} lat={lat} lon={lon} />
        <Days
            day = {0}
            dayname='monday'
            getData={getData}
        />
        <Days
            day = {8}
            dayname='tuesday'
            getData={getData}
        />
        <Days
            day = {16}
            dayname='thursday'
            getData={getData}
        />
        <Days
            day = {24}
            dayname='wednesday'
            getData={getData}
        />
        <Days
            day = {32}
            dayname='friday'
            getData={getData}
        />

        </div>
    
    
    )
}
export default Api;