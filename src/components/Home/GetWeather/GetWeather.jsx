import axios from "axios";
import { WeatherContext } from "../../../context/WeatherContext";
import { useContext, useEffect } from "react";

const GetWeather = ({ position }) => {
  const { setWeatherData } = useContext(WeatherContext);

  const { latitude, longitude } = position;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: {
          q: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
          days: 3,
        },
        headers: {
          "x-rapidapi-key": import.meta.env.REACT_APP_MY_KEY,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [position]);
};

export default GetWeather;
