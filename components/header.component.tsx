"use client";

import { Space } from "antd";
import React from "react";
import ThemeSwitcher from "./theme-switcher.component";
import { bellIconWrapperStyle, headerWrapper } from "./styles/header.style";
import { BellOutlined } from "@ant-design/icons";
import { cyderIColors } from "@cd/theme";
import { useTheme } from "@cd/context/theme.context";

const Header = () => {
  const { mode } = useTheme();
  return (
    <header
      style={{
        ...headerWrapper,
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: cyderIColors(mode).surface,
      }}
    >
      <section>
        <Space align="start" direction="horizontal" size="middle">
          <ThemeSwitcher />
        </Space>
      </section>
      <section style={{ display: "flex" }}>
        <div
          style={{
            ...bellIconWrapperStyle,
            backgroundColor: cyderIColors(mode).cardHighlight,
          }}
        >
          <BellOutlined
            style={{ fontSize: "16px", color: cyderIColors(mode).textPrimary }}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
