import { mockMembers, mockOffers } from "@cd/lib/mock-info.data";
import { DashboardMetrics } from "@cd/types/general.type";
import { NextResponse } from "next/server";

export async function GET() {
  const activeMembers = mockMembers.filter((m) => m.balance > 0).length;
  const totalEarned = mockMembers.reduce((sum, m) => sum + m.earned, 0);
  const totalRedeemed = mockMembers.reduce((sum, m) => sum + m.redeemed, 0);
  const totalBalance = mockMembers.reduce((sum, m) => sum + m.balance, 0);

  const topOffers = mockOffers.sort((a, b) => b.count - a.count).slice(0, 5);

  const metrics: DashboardMetrics = {
    activeMembers,
    totalEarned,
    totalRedeemed,
    totalBalance,
    topOffers,
  };

  return NextResponse.json(metrics);
}
