"use client";

import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/charts";
import { Skeleton, Typography } from "antd";
import { getOfferStats } from "@cd/app/actions/offers";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import useLoading from "@cd/hooks/loading.hook";

const { Title } = Typography;

const OfferPieChart = () => {
  const [data, setData] = useState<{ type: string; value: number }[]>([]);
  const { startLoading, stopLoading, loading } = useLoading();

  useEffect(() => {
    const fetchStats = async () => {
      startLoading();
      const res = await getOfferStats();
      const pieData = res.offers.map((offer) => ({
        type: offer.name,
        value: offer.count,
      }));
      setData(pieData);
      stopLoading();
    };
    fetchStats();
  }, []);

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.3,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    interactions: [{ type: "element-active" }],
    tooltip: {
      title: "type",
      items: ["value"],
    },
    appendPadding: 0,
    legend: {
      color: {
        title: false,
        rowPadding: 5,
        // position: "right",
      },
    },
    animate: { appear: { animation: "fade-in", duration: 600 } },
  };

  if (!data?.length) {
    return (
      <div>
        <Skeleton
          loading={loading}
          style={{
            margin: "10px 0",
            padding: "24px",
            height: "100px",
            width: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "10px 24px" }}>
      <Title level={5}>Offer Engagement Breakdown</Title>
      <Pie {...config} />
    </div>
  );
};

export default OfferPieChart;
