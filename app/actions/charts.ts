"use server";

import { mockMembers } from "@cd/lib/mock-info.data";

export type ChartDataPoint = {
  date: string;
  value: number;
  type: "earn" | "redeem";
  member: string;
};

export async function getEarningRedemptionChartData(
  startDate?: string,
  endDate?: string
): Promise<ChartDataPoint[]> {
  const dateMap: Record<
    string,
    { earn: number; redeem: number; member: string }
  > = {};

  for (const member of mockMembers) {
    for (const tx of member.transactions) {
      const txDate = new Date(tx.date);
      if (
        (startDate && txDate < new Date(startDate)) ||
        (endDate && txDate > new Date(endDate))
      ) {
        continue;
      }

      const key = tx.date;

      if (!dateMap[key]) {
        dateMap[key] = { earn: 0, redeem: 0, member: member.name };
      }

      dateMap[key].member = member.name;

      if (tx.type === "earn") {
        dateMap[key].earn += tx.points;
      } else if (tx.type === "redeem") {
        dateMap[key].redeem += tx.points;
      }
    }
  }

  const chartData: ChartDataPoint[] = [];

  for (const [date, { earn, redeem, member }] of Object.entries(dateMap)) {
    if (earn > 0) {
      chartData.push({ date, value: earn, type: "earn", member });
    }
    if (redeem > 0) {
      chartData.push({ date, value: redeem, type: "redeem", member });
    }
  }

  return chartData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
