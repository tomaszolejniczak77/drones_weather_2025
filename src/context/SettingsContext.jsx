import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingProvider = ({ children }) => {
  const [userWindGust, setUserWindGust] = useState(() => {
    const savedValue = localStorage.getItem("userWindGust");
    return savedValue !== null ? JSON.parse(savedValue) : 8;
  });

  useEffect(() => {
    localStorage.setItem("userWindGust", JSON.stringify(userWindGust));
  }, [userWindGust]);

  return (
    <SettingsContext.Provider value={{ userWindGust, setUserWindGust }}>
      {children}
    </SettingsContext.Provider>
  );
};
