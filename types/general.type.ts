export type Member = {
  id: string;
  name: string;
  earned: number;
  redeemed: number;
  balance: number;
  transactions: Transaction[];
};

export type Transaction = {
  date: string;
  type: "earn" | "redeem";
  points: number;
};

export type Offer = {
  id: string;
  name: string;
  count: number;
};

export interface TableDataType {
  key: string;
  name: string;
  earned: number;
  redeemed: number;
  balance: number;
  // tags: string[];
}

export type DashboardMetrics = {
  activeMembers: number;
  totalEarned: number;
  totalRedeemed: number;
  totalBalance: number;
  topOffers: Offer[];
};

export type MemberStats = {
  id: string;
  name: string;
  earned: number;
  redeemed: number;
  balance: number;
};
