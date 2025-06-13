"use client";

import React from "react";
import { Switch } from "antd";
import { useTheme } from "@cd/context/theme.context";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { cyderIColors } from "@cd/theme";

const ThemeSwitcher: React.FC = () => {
  const { mode: defaultMode, toggleTheme } = useTheme();

  const onChange = (checked: boolean) => {
    const mode = checked ? "light" : "dark";
    toggleTheme(mode);
    // Optionally, you can log the theme change or perform additional actions
    console.log(`Theme switched to ${checked ? "dark" : "light"}`);
  };
  const cyderPrimaryTextColor = cyderIColors(defaultMode).textPrimary;
  const cyderPrimaryBackgroundColor = cyderIColors(defaultMode).background;
  return (
    <Switch
      defaultChecked={defaultMode === "dark"}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={
        <div style={{ color: cyderPrimaryTextColor }}>
          <SunOutlined />
        </div>
      }
      style={{
        backgroundColor: cyderPrimaryBackgroundColor,
        color: cyderPrimaryTextColor,
        borderColor: cyderPrimaryTextColor,
      }}
      onChange={onChange}
    />
  );
};

export default ThemeSwitcher;
