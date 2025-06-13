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
import React, { useEffect } from "react";

const MetricsCards = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [metrics, setMetrics] = React.useState<DashboardMetrics | null>(null);
  const { mode } = useTheme();

  const fetchMetrics = async () => {
    startLoading();
    try {
      const res = await fetch("/api/metrics");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();

      setMetrics(data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

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
    <Flex style={{ width: "100%" }} justify="space-between">
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
