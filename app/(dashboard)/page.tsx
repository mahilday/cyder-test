import DashboardContent from "@cd/content/dashboard/dashboard.content";
import React from "react";
import { getMemberBreakdown } from "../actions/members";

const DashboardPage = async () => {
  const serverData = await getMemberBreakdown();

  return <DashboardContent members={serverData} />;
};

export default DashboardPage;
