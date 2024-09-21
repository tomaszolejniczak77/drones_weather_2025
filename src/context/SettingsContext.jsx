import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingProvider = ({ children }) => {
  const [userWindGust, setUserWindGust] = useState(() => {
    const savedValue = localStorage.getItem("userWindGust");
    return savedValue !== null ? JSON.parse(savedValue) : 8;
  });

  const [userTemperature, setUserTemperature] = useState(() => {
    const savedValue = localStorage.getItem("userTemperature");
    return savedValue !== null ? JSON.parse(savedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem("userWindGust", JSON.stringify(userWindGust));
  }, [userWindGust]);

  useEffect(() => {
    localStorage.setItem("userTemperature", JSON.stringify(userTemperature));
  }, [userTemperature]);

  return (
    <SettingsContext.Provider
      value={{
        userWindGust,
        setUserWindGust,
        userTemperature,
        setUserTemperature,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
