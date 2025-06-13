"use client";

import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import {
  ChartDataPoint,
  getEarningRedemptionChartData,
} from "@cd/app/actions/charts";
import { useThemeColors } from "@cd/hooks/theme-colors.hook";
import useLoading from "@cd/hooks/loading.hook";
import { Select, Skeleton } from "antd";
import { useTheme } from "@cd/context/theme.context";
import { cyderIColors } from "@cd/theme";
import { useChartFilter } from "@cd/context/filter-chart.context";
import moment from "moment";
import { lineChartconfig } from "./chart.data";

const options = [
  { value: "thisWeek", label: "This Week" },
  { value: "last7Days", label: "Last 7 Days" },
  { value: "thisMonth", label: "This Month" },
  { value: "thisYear", label: "This Year" },
];

const ChartContent = () => {
  const { mode } = useTheme();
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const { startDate, endDate, setFilter, filterType } = useChartFilter();
  const { startLoading, loading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      startLoading();
      const chartData = await getEarningRedemptionChartData(
        moment(startDate)?.toISOString(),
        moment(endDate)?.toISOString()
      );
      setData(chartData ?? []);
      stopLoading();
    };

    fetchData();
  }, [startDate, endDate]);

  if (!data?.length)
    return (
      <Skeleton
        loading={loading}
        style={{ margin: "10px 0", height: "200px", width: "100%" }}
      />
    );

  return (
    <div
      style={{
        background: cyderIColors(mode)?.cardHighlight,
        padding: "10px",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}
      >
        <Select
          style={{ width: 150 }}
          value={filterType}
          onChange={(val) => setFilter(val)}
          options={options}
        />
      </div>

      <Line
        loading={loading}
        {...lineChartconfig(data, mode)}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ChartContent;
