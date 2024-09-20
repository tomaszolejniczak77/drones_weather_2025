import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Info from "./components/Info/Info";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";
import { SettingProvider } from "./context/SettingsContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <LocationProvider>
          <SettingProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </SettingProvider>
        </LocationProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
