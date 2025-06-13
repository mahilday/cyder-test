"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useTheme } from "@cd/context/theme.context";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { cyderIColors } from "@cd/theme";
import { ThemeMode } from "@cd/theme/theme.manager";

const ThemeSwitcher: React.FC = () => {
  const { mode: defaultMode, toggleTheme } = useTheme();
  const [updatedMode, setUpdatedMode] = useState<ThemeMode>(defaultMode);

  const onChange = (checked: boolean) => {
    const mode = checked ? "dark" : "light";
    toggleTheme(mode);
  };
  const cyderPrimaryTextColor = cyderIColors(defaultMode).textPrimary;
  const cyderPrimaryBackgroundColor = cyderIColors(defaultMode).background;

  useEffect(() => {
    setUpdatedMode(defaultMode);
  }, [defaultMode]);

  return (
    <Switch
      defaultChecked={updatedMode === "dark"}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={
        <div style={{ color: cyderPrimaryTextColor }}>
          <SunOutlined />
        </div>
      }
      checked={updatedMode === "dark"}
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
