import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Force dark mode across the app. Do not allow switching off.
  const [isDark, setIsDark] = useState(() => true);

  useEffect(() => {
    const root = document.documentElement;
    // Always ensure the dark class is present
    root.classList.add('dark');
    try {
      localStorage.setItem('theme', 'dark');
    } catch (e) {
      // ignore storage errors
    }
  }, [isDark]);

  // Toggle is disabled because dark mode is enforced.
  const toggleTheme = () => { /* no-op: dark mode enforced */ };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
