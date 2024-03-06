import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }

  useEffect(()=> {
    // already saved as 'dark' or window using a dark mode => isDark
    const isDark = 
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches);
      // update to context provider
      setDarkMode(isDark);
      // update html class dark adder
      updateDarkMode(isDark);
  }, []);

  return <DarkModeContext.Provider value = {{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
}


export const useDarkMode = () => useContext(DarkModeContext);
function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
