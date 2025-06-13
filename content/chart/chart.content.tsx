"use client";

import React from "react";
import { Line } from "@ant-design/charts";
import { ChartDataPoint } from "@cd/app/actions/charts";
import { Select, Skeleton } from "antd";
import { useTheme } from "@cd/context/theme.context";
import { cyderIColors } from "@cd/theme";
import { useChartFilter } from "@cd/context/filter-chart.context";
import { lineChartconfig } from "./chart.data";

const options = [
  { value: "thisWeek", label: "This Week" },
  { value: "last7Days", label: "Last 7 Days" },
  { value: "thisMonth", label: "This Month" },
  { value: "thisYear", label: "This Year" },
];

const ChartContent = ({ chartData: data }: { chartData: ChartDataPoint[] }) => {
  const { mode } = useTheme();

  const { startDate, endDate, setFilter, filterType } = useChartFilter();

  if (!data?.length)
    return (
      <Skeleton
        style={{ margin: "10px 0", height: "100px", width: "100%" }}
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
        key={`${filterType}-${startDate}-${endDate}`}
        {...lineChartconfig(data, mode)}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ChartContent;
