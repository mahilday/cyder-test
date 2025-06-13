"use client";

import {
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import CardComponent from "@cd/components/card.component";
import { useTheme } from "@cd/context/theme.context";
import useLoading from "@cd/hooks/loading.hook";
import { cyderIColors } from "@cd/theme";
import { DashboardMetrics } from "@cd/types/general.type";
import { Flex } from "antd";
import React from "react";

const MetricsCards = ({ metrics }: { metrics: DashboardMetrics | null }) => {
  const { loading } = useLoading();
  const { mode } = useTheme();

  const cyderPrimaryTextColor = cyderIColors(mode)?.primary;
  const iconStyles = {
    fontSize: "28px",
    color: cyderPrimaryTextColor,
  };

  const cardMetrics = [
    {
      title: "Active Members",
      value: metrics?.activeMembers || 0,
      icon: <PieChartOutlined style={iconStyles} />,
    },
    {
      title: "Total Earned Points",
      value: metrics?.totalEarned || 0,
      icon: <LineChartOutlined style={iconStyles} />,
    },
    {
      title: "Total Redeemed Points",
      value: metrics?.totalRedeemed || 0,
      icon: <RadarChartOutlined style={iconStyles} />,
    },
  ];

  return (
    <Flex style={{ width: "100%", gap: "16px" }} justify="space-between">
      {cardMetrics?.map((metric, index) => (
        <CardComponent
          key={index}
          loading={loading}
          title={metric?.title}
          value={metric?.value}
          icon={metric?.icon}
        />
      ))}
    </Flex>
  );
};

export default MetricsCards;
