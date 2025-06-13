"use client";

import React, { useState } from "react";
import {
  AlignRightOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  MailOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useTheme } from "@cd/context/theme.context";
import { cyderIColors } from "@cd/theme";
import { headerHeight } from "@cd/lib/general-sizes.data";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <AppstoreOutlined />, label: "Dashboard" },
  { key: "2", icon: <UsergroupAddOutlined />, label: "Members" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
];

const SideBarComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { mode } = useTheme();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className="add-transition"
      style={{
        width: collapsed ? 76 : 256,
        position: "sticky",
        top: 0,
        height: "100%",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          backgroundColor: cyderIColors(mode).surface,
          borderRadius: "100px",
          width: "100%",
          boxShadow: "3px 1px 10px rgba(0, 0, 0, 0.15)",
          height: headerHeight,
        }}
        className="flex-center"
        onClick={toggleCollapsed}
      >
        <AlignRightOutlined
          size={32}
          style={{
            transform: collapsed ? "scaleX(-1)" : "scaleX(1)",
            transition: "transform 0.5s ease",
            color: cyderIColors(mode).textPrimary,
          }}
        />
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme={mode}
        className="rounded-selection add-transition"
        style={{
          borderRadius: collapsed ? "100px" : "20px",
          padding: "20px 3px",
          height: `90%`,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default SideBarComponent;
