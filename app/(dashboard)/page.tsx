import DashboardContent from "@cd/content/dashboard/dashboard.content";
import React from "react";
import { getMemberBreakdown } from "../actions/members";
import { getEarningRedemptionChartData } from "../actions/charts";
import moment from "moment";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const DashboardPage: React.FC<Props> = async ({ searchParams }) => {
  // Do not remove await searchParams, important for nextjs 15
  const params = await searchParams;

  const startDate = params?.startDate
    ? params?.startDate
    : moment().startOf("week");

  const endDate = params?.endDate ? params?.endDate : moment().endOf("week");

  const [serverData, chartData] = await Promise.all([
    getMemberBreakdown(),
    getEarningRedemptionChartData(startDate as string, endDate as string),
  ]);

  if (!serverData || !Array.isArray(serverData)) {
    return <div>Error loading data.</div>;
  }

  return <DashboardContent members={serverData ?? []} chartData={chartData} />;
};

export default DashboardPage;
