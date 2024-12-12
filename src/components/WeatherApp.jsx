import React, { useState } from 'react';
import axios from 'axios';

const cities = ["Pune", "Mumbai", "Delhi"];

const WeatherApp = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = "72dc4d291878095cf7c4d4b2f62a43a8"; // Replace with your OpenWeatherMap API key
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const handleCityChange = async (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setWeather('');
    setError('');
    setLoading(true);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      const data = response.data;
      setWeather(`${data.main.temp}°C, ${data.weather[0].description}`);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <div>
        <label htmlFor="city">Select a city: </label>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          <option value="" disabled>
            --Choose a city--
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {loading && <div style={{ marginTop: '20px' }}>Loading...</div>}
      {error && <div style={{ marginTop: '20px', color: 'red' }}>{error}</div>}
      {weather && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Weather in {selectedCity}:</strong> {weather}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
