import axios from "axios";
import { WeatherContext } from "../../../context/WeatherContext";
import { useContext, useEffect } from "react";

const GetWeather = ({ position }) => {
  const { setWeatherData, setWeatherError } = useContext(WeatherContext);

  const { latitude, longitude } = position;

  const apiKey = import.meta.env.REACT_APP_MY_KEY;

  const q = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

  console.log(q);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3&aqi=no&alerts=no`,
        // params: {
        //   q: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
        //   days: 3,
        // },
        // headers: {
        //   "x-rapidapi-key": import.meta.env.REACT_APP_MY_KEY,
        //   "x-rapidapi-host": "weatherapi.com/v1/forecast.json",
        // },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error.message);
        setWeatherError(error.message);
      }
    };

    fetchData();
  }, [position]);
};

export default GetWeather;
