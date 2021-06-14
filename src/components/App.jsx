import React, {useEffect, useState} from 'react';
import {key} from '../../apikey.js';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=98122&appid=' + key)
    .then((response) => {
      console.log('response.data: ', response.data)
      setCity(response.data.city.name)
      setData(response.data.list)
    })
  };

  return (
    <div>
      <div>Weather for {city}</div>
      {weatherData.map((data) => {
        return (
          <div>
            <div>{data.main.temp}</div>
            <div>{data.dt_txt}</div>
          </div>
        )
      })}
    </div>
  )
}

export default App;