import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingProvider = ({ children }) => {
  const [userWindGust, setUserWindGust] = useState(8);

  return (
    <SettingsContext.Provider value={{ userWindGust, setUserWindGust }}>
      {children}
    </SettingsContext.Provider>
  );
};
