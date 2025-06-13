import DashboardContent from "@cd/content/dashboard/dashboard.content";
import React from "react";
import { getMemberBreakdown } from "../actions/members";

const DashboardPage = async () => {
  const serverData = await getMemberBreakdown();

  if (!serverData || !Array.isArray(serverData)) {
    return <div>Error loading data.</div>;
  }

  return <DashboardContent members={serverData ?? []} />;
};

export default DashboardPage;
