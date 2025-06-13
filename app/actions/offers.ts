"use server";

export interface Offer {
  id: string;
  name: string;
  count: number;
}

interface OfferStatsResponse {
  offers: Offer[];
  mostPopular: Offer;
  leastPopular: Offer;
  sortedOffers: Offer[];
}

const mockOffers: Offer[] = [
  { id: "offer01", name: "Use Credit Card", count: 340 },
  { id: "offer02", name: "Open Savings Account", count: 150 },
  { id: "offer03", name: "Set Up Direct Deposit", count: 210 },
  { id: "offer04", name: "Refer a Friend", count: 95 },
  { id: "offer05", name: "Download Mobile App", count: 400 },
];

export async function getOfferStats(): Promise<OfferStatsResponse> {
  const sortedOffers = [...mockOffers].sort((a, b) => b.count - a.count);
  const mostPopular = sortedOffers[0];
  const leastPopular = sortedOffers[sortedOffers.length - 1];

  return {
    offers: mockOffers,
    sortedOffers,
    mostPopular,
    leastPopular,
  };
}
