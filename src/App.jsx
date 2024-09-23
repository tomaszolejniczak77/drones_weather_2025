import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Info from "./components/Info/Info";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";
import { SettingProvider } from "./context/SettingsContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <LocationProvider>
          <SettingProvider>
            <LanguageProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </LanguageProvider>
          </SettingProvider>
        </LocationProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
