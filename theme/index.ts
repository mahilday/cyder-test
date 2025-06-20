import type { ThemeConfig } from "antd";
import { cyderDarkColors, cyderLightColors } from "./color.theme";
import { ThemeMode } from "./theme.manager";

export const cyderIColors = (
  mode: ThemeMode
): typeof cyderLightColors | typeof cyderDarkColors =>
  mode === "dark" ? cyderDarkColors : cyderLightColors;

export function getAntdTheme(mode: "light" | "dark"): ThemeConfig {
  const cyderColors = cyderIColors(mode);
  return {
    token: {
      ...cyderColors,
      colorPrimary: cyderColors.primary,
      colorSuccess: cyderColors.success,
      colorError: cyderColors.danger,
      colorInfo: cyderColors.info,
      colorWarning: cyderColors.warning,
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14,
      borderRadius: 8,
    },
    components: {
      Card: {
        colorBgContainer: cyderColors.cardHighlight,
        colorBorder: cyderColors.border,
      },
      Layout: {
        bodyBg: cyderColors.background,
      },
      Table: {
        colorBgContainer: cyderColors.cardHighlight,
      },
      Menu: {},
      Select: {
        colorBgContainer: cyderColors.background,
        colorBorder: cyderColors.border,
      },
      Typography: {
        colorText: cyderColors.textPrimary,
        colorTextSecondary: cyderColors.textSecondary,
      },
      Button: {
        colorPrimary: cyderColors.primary,
        colorPrimaryHover: cyderColors.surface,
      },
    },
  };
}
