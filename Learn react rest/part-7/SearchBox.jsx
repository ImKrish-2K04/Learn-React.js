import { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import "./SearchBox.css";

export default function SearchBox() {
  const [cityName, setCityName] = useState("");
  const [whetherData, setWhetherData] = useState({});
  const API_STR = "https://api.openweathermap.org/data/2.5/weather?q=";
  // {city name}&appid={API key}
  const API_KEY = "b254bcd445fa15b75a8ee31bdf8b4d03";

  const handleCityname = (e) => {
    setCityName(e.target.value);
  };

  const getWhetherInfo = async () => {
    try {
      const whetherData = await axios.get(
        `${API_STR}${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = whetherData.data;
      const resultingObj = {
        humidity: data.main.humidity,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        whetherTypeDesc: data.weather[0].description,
        windSpeed: data.wind.speed,
        cityName: cityName,
      };
      setWhetherData({ ...resultingObj });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    getWhetherInfo();
    setCityName("");
  };

  useEffect(() => {
    console.log(whetherData);
  }, [whetherData]);

  return (
    <div className="SearchBox">
      <h2>Search for the Whether:</h2>

      <form action="#" onSubmit={handleSubmit}>
        <div className="search-bar">
          <Input
            className="cityName"
            name="cityname"
            id="cityName"
            placeholder="enter city name"
            value={cityName}
            onChange={handleCityname}
          />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>

      {whetherData.cityName && (
        <div className="weather-info">
          <h2>Weather in {whetherData.cityName}</h2>
          <p>Temperature: {whetherData.temp}°C</p>
          <p>Humidity: {whetherData.humidity}%</p>
          <p>Wind Speed: {whetherData.windSpeed} m/s</p>
          <p>Description: {whetherData.whetherTypeDesc}</p>
          <p>Minimum Temperature: {whetherData.tempMin}°C</p>
          <p>Maximum Temperature: {whetherData.tempMax}°C</p>
        </div>
      )}
    </div>
  );
}
