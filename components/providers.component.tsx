"use client";
import { useTheme } from "@cd/context/theme.context";
import { getAntdTheme } from "@cd/theme";
import { ConfigProvider, theme as antdThemeSystem } from "antd";
import React from "react";

const CustomProviders = ({ children }: React.PropsWithChildren) => {
  const { mode } = useTheme();
  return (
    <ConfigProvider
      theme={{
        ...getAntdTheme(mode),
        algorithm:
          mode === "dark"
            ? antdThemeSystem.darkAlgorithm
            : antdThemeSystem.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CustomProviders;
