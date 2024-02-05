import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fc75e90b71017bea9496a4612c46e01c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="contanier">
        <div className="search">
          <input
            className="input"
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            value={location}
            type="text"
          />
        </div>

        <div className="top">
          <div className="location">
            <p className="city">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <p className="temperature">{data.main.temp.toFixed()}°C</p>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="weather-description">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="feels-like">{data.main.feels_like.toFixed()}°C</p>
            ) : null}

            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? (
              <p className="humidity-level">{data.main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="wind-speed">{data.wind.speed.toFixed()}mph</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
