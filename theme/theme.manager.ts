"use client";
import { applyTheme } from "@cd/utils";
import { cyderDarkColors, cyderLightColors } from "./color.theme";

export type ThemeMode = "light" | "dark";

export function setTheme(mode: ThemeMode) {
  const theme = mode === "dark" ? cyderDarkColors : cyderLightColors;
  applyTheme(theme);
  localStorage.setItem("theme", mode);
  document.documentElement.setAttribute("data-theme", mode);
}

export function initTheme() {
  const saved = localStorage.getItem("theme") as ThemeMode | null;
  setTheme(saved || "light");
  return saved || "light";
}
