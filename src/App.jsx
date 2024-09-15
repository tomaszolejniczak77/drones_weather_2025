import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <LocationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </LocationProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
