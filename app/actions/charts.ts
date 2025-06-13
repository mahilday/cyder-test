'use server';

import { mockMembers } from "@cd/lib/mock-info.data";

type ChartDataPoint = {
  date: string;
  earned: number;
  redeemed: number;
};

export async function getEarningRedemptionChartData(
  startDate?: string,
  endDate?: string
): Promise<ChartDataPoint[]> {
  const dateMap: Record<string, { earned: number; redeemed: number }> = {};

  for (const member of mockMembers) {
    for (const tx of member.transactions) {
      const txDate = new Date(tx.date);
      if (
        (startDate && txDate < new Date(startDate)) ||
        (endDate && txDate > new Date(endDate))
      ) {
        continue;
      }

      if (!dateMap[tx.date]) {
        dateMap[tx.date] = { earned: 0, redeemed: 0 };
      }

      if (tx.type === 'earn') {
        dateMap[tx.date].earned += tx.points;
      } else if (tx.type === 'redeem') {
        dateMap[tx.date].redeemed += tx.points;
      }
    }
  }

  const chartData = Object.entries(dateMap)
    .map(([date, values]) => ({ date, ...values }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return chartData;
}
