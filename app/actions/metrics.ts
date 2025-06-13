import { DashboardMetrics } from "@cd/types/general.type";
import { headers } from "next/headers";

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host");

  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/metrics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch dashboard metrics");
    }

    const data = await res.json();

    return {
      ...data,
    };
  } catch (error) {
    console.error("Error fetching dashboard metrics:", error);
    return {
      activeMembers: 0,
      totalEarned: 0,
      totalRedeemed: 0,
      topOffers: [],
      totalBalance: 0,
    };
  }
}
