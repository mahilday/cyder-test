"use client";

import { useEffect, useState } from "react";
import { cyderLightColors } from "@cd/theme/color.theme";

export function useThemeColors(keys: (keyof typeof cyderLightColors)[]) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const result = keys.map(
      (key) =>
        styles.getPropertyValue(`--cyder-${key}`)?.trim() ||
        cyderLightColors[key]
    );
    setColors(result);
  }, [keys.join(",")]);

  return colors;
}
