/*
 Based on https://codesandbox.io/p/sandbox/stitches-dark-mode-te4ne?file=%2Fsrc%2FColourModeProvider.tsx%3A1%2C1-149%2C1
*/

import React, { createContext, useState, useEffect } from "react";
import {
  theme as defaultTheme,
  darkTheme,
} from "../stitches.config";

export const ColourModeContext = createContext(null);

const available_themes = {
  light: defaultTheme.className,
  dark: darkTheme.className,
};

const saveColorMode = (newMode) => {
  try {
    if (typeof newMode === "string")
      window.localStorage.setItem("color-mode", newMode);
  } catch (e) {
    console.warn(e);
  }
};

const getSavedColorModePreference = () => {
  try {
    const savedMode = window.localStorage.getItem("color-mode");
    if (typeof savedMode === "string") return savedMode;
  } catch (e) {
    console.warn(e);
    return null;
  }
  return null;
};

const getMediaTheme = () => {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const hasMediaQueryPreference = typeof mql.matches === "boolean";
    if (hasMediaQueryPreference) return mql.matches ? "dark" : "light";
  }
  // Handle the case when matchMedia is not available (e.g., in a test environment)
  return "light"; // Default to light theme
};


const useColorMode = () => {
  const [colorMode, setColorMode] = useState("");
  const html = document.documentElement;

  const applyColorMode = (newMode) => {
    html.classList.remove(available_themes[colorMode]);
    html.classList.add(available_themes[newMode]);
    setColorMode(newMode);
  };

  let savedColorMode = getSavedColorModePreference();
  if (savedColorMode == null) {
    savedColorMode = getMediaTheme();
  }

  html.classList.add(available_themes[savedColorMode]);
  useEffect(() => {
    setColorMode(savedColorMode);
  }, [savedColorMode]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      applyColorMode(e.matches ? "dark" : "light");
    });

  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => {
      applyColorMode(e.matches ? "light" : "dark");
    });

  const cycleToggleMode = () => {
    const keys = Object.keys(available_themes);
    let index = keys.indexOf(colorMode);
    if (index === keys.length - 1) {
      index = 0;
    } else if (index >= 0) {
      index = index + 1;
    }
    const newMode = keys[index];
    applyColorMode(newMode);
    saveColorMode(newMode);
  };

  return [colorMode, cycleToggleMode];
};

const ColourModeProvider = ({ children }) => {
  const [colorMode, cycleToggleMode] = useColorMode();
  return (
    <ColourModeContext.Provider
      value={{
        colorMode: colorMode,
        cycleToggleMode: cycleToggleMode
      }}
    >
      {children}
    </ColourModeContext.Provider>
  );
};

export default ColourModeProvider;
