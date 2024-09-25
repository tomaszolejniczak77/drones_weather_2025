import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedValue = localStorage.getItem("userLanguage");
    return savedValue !== null ? JSON.parse(savedValue) : 0;
  });

  useEffect(() => {
    localStorage.setItem("userLanguage", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
