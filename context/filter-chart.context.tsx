"use client";
import React, { createContext, useContext, useState } from "react";
import moment, { Moment } from "moment";

export type DateFilterType =
  | "thisWeek"
  | "last7Days"
  | "thisMonth"
  | "thisYear";

interface ChartFilterContextType {
  startDate: Moment;
  endDate: Moment;
  setFilter: (type: DateFilterType) => void;
  filterType: DateFilterType;
}

const ChartFilterContext = createContext<ChartFilterContextType | null>(null);

export const ChartFilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [startDate, setStartDate] = useState(moment().startOf("week"));
  const [endDate, setEndDate] = useState(moment().endOf("week"));
  const [filterType, setFilterType] = useState<DateFilterType>("thisWeek");

  const setFilter = (type: DateFilterType) => {
    setFilterType(type);
    switch (type) {
      case "last7Days":
        setStartDate(moment().subtract(6, "days").startOf("day"));
        setEndDate(moment().endOf("day"));
        break;
      case "thisMonth":
        setStartDate(moment().startOf("month"));
        setEndDate(moment().endOf("month"));
        break;
      case "thisYear":
        setStartDate(moment().startOf("year"));
        setEndDate(moment().endOf("year"));
        break;
      default:
        // thisWeek
        setStartDate(moment().startOf("week"));
        setEndDate(moment().endOf("week"));
    }
  };

  return (
    <ChartFilterContext.Provider
      value={{ startDate, endDate, setFilter, filterType }}
    >
      {children}
    </ChartFilterContext.Provider>
  );
};

export const useChartFilter = () => {
  const ctx = useContext(ChartFilterContext);
  if (!ctx) throw new Error("ChartFilterProvider not found");
  return ctx;
};
