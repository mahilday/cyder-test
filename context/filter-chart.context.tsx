"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultFilterType: DateFilterType = "thisWeek";

  const [filterType, setFilterType] =
    useState<DateFilterType>(defaultFilterType);
  const [startDate, setStartDate] = useState<Moment>(moment().startOf("week"));
  const [endDate, setEndDate] = useState<Moment>(moment().endOf("week"));

  // Set date ranges based on filter type
  const updateDates = (type: DateFilterType) => {
    let start: Moment;
    let end: Moment;

    switch (type) {
      case "last7Days":
        start = moment().subtract(6, "days").startOf("day");
        end = moment().endOf("day");
        break;
      case "thisMonth":
        start = moment().startOf("month");
        end = moment().endOf("month");
        break;
      case "thisYear":
        start = moment().startOf("year");
        end = moment().endOf("year");
        break;
      default:
        start = moment().startOf("week");
        end = moment().endOf("week");
        break;
    }

    setStartDate(start);
    setEndDate(end);
    return { start, end };
  };

  // Apply filter and push to search params
  const setFilter = (type: DateFilterType) => {
    const { start, end } = updateDates(type);
    setFilterType(type);

    const params = new URLSearchParams(searchParams.toString());
    params.set("startDate", start.toISOString());
    params.set("endDate", end.toISOString());
    params.set("filter", type);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Initialize from URL on first load
  useEffect(() => {
    const urlStart = searchParams.get("startDate");
    const urlEnd = searchParams.get("endDate");
    const urlFilter = searchParams.get("filter") as DateFilterType;

    if (urlStart && urlEnd && urlFilter) {
      setStartDate(moment(urlStart));
      setEndDate(moment(urlEnd));
      setFilterType(urlFilter);
    } else {
      setFilter(defaultFilterType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
