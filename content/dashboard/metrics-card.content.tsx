"use client";

import {
  LineChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import CardComponent from "@cd/components/card.component";
import useLoading from "@cd/hooks/loading.hook";
import { DashboardMetrics } from "@cd/types/general.type";
import { Flex } from "antd";
import React, { useEffect } from "react";

const MetricsCards = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [metrics, setMetrics] = React.useState<DashboardMetrics | null>(null);

  const fetchMetrics = async () => {
    startLoading();
    try {
      // Simulate an API call
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

  const cardMetrics = [
    {
      title: "Active Members",
      value: metrics?.activeMembers || 0,
      icon: <PieChartOutlined style={{ fontSize: "28px" }} />,
    },
    {
      title: "Total Earned",
      value: metrics?.totalEarned || 0,
      icon: <LineChartOutlined style={{ fontSize: "28px" }} />,
    },
    {
      title: "Total Redeemed",
      value: metrics?.totalRedeemed || 0,
      icon: <RadarChartOutlined style={{ fontSize: "28px" }} />,
    },
  ];

  return (
    <Flex gap={5}>
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
