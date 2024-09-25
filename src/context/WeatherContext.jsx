import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, weatherError, setWeatherError }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
