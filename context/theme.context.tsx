"use client";

import { initTheme, setTheme } from "@cd/theme/theme.manager";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize theme from localStorage or default to light
      const storedTheme = initTheme();
      if (storedTheme) {
        setMode(storedTheme);
      }
    }
  }, []);

  const toggleTheme = (theme: ThemeMode) => {
    setMode(theme);
    if (typeof window !== "undefined") setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
