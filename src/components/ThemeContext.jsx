
import { createContext, useState, useEffect, useContext } from 'react';

// Create the context object
const ThemeContext = createContext();

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the context easily
export const useTheme = () => {
  return useContext(ThemeContext);
};