import { Member, Offer } from "@cd/types/general.type";

const mockMembers: Member[] = [
  {
    id: "mem001",
    name: "John Doe",
    earned: 1200,
    redeemed: 500,
    balance: 700,
    transactions: [
      { date: "2025-01-10", type: "earn", points: 300 },
      { date: "2025-03-05", type: "earn", points: 500 },
      { date: "2025-05-15", type: "redeem", points: 200 },
      { date: "2025-07-12", type: "redeem", points: 300 },
      { date: "2025-09-01", type: "earn", points: 400 },
    ],
  },
  {
    id: "mem002",
    name: "Sarah Johnson",
    earned: 800,
    redeemed: 200,
    balance: 600,
    transactions: [
      { date: "2025-02-03", type: "earn", points: 400 },
      { date: "2025-04-08", type: "redeem", points: 100 },
      { date: "2025-06-10", type: "earn", points: 400 },
      { date: "2025-08-18", type: "redeem", points: 100 },
    ],
  },
  {
    id: "mem003",
    name: "David Smith",
    earned: 1500,
    redeemed: 1000,
    balance: 500,
    transactions: [
      { date: "2025-01-15", type: "earn", points: 500 },
      { date: "2025-03-21", type: "redeem", points: 300 },
      { date: "2025-06-05", type: "earn", points: 1000 },
      { date: "2025-08-30", type: "redeem", points: 700 },
    ],
  },
  {
    id: "mem004",
    name: "Emily Brown",
    earned: 400,
    redeemed: 0,
    balance: 400,
    transactions: [
      { date: "2025-02-22", type: "earn", points: 200 },
      { date: "2025-05-10", type: "earn", points: 200 },
    ],
  },
  {
    id: "mem005",
    name: "Michael Lee",
    earned: 2000,
    redeemed: 1000,
    balance: 1000,
    transactions: [
      { date: "2025-01-05", type: "earn", points: 1000 },
      { date: "2025-03-18", type: "redeem", points: 500 },
      { date: "2025-06-25", type: "earn", points: 1000 },
      { date: "2025-09-09", type: "redeem", points: 500 },
    ],
  },
  {
    id: "mem006",
    name: "Olivia Martin",
    earned: 650,
    redeemed: 300,
    balance: 350,
    transactions: [
      { date: "2025-03-11", type: "earn", points: 300 },
      { date: "2025-05-19", type: "redeem", points: 150 },
      { date: "2025-07-14", type: "earn", points: 350 },
      { date: "2025-09-29", type: "redeem", points: 150 },
    ],
  },
  {
    id: "mem007",
    name: "James Taylor",
    earned: 1000,
    redeemed: 1000,
    balance: 0,
    transactions: [
      { date: "2025-04-04", type: "earn", points: 1000 },
      { date: "2025-08-16", type: "redeem", points: 1000 },
    ],
  },
  {
    id: "mem008",
    name: "Sophia Garcia",
    earned: 900,
    redeemed: 300,
    balance: 600,
    transactions: [
      { date: "2025-02-14", type: "earn", points: 400 },
      { date: "2025-06-01", type: "earn", points: 500 },
      { date: "2025-09-21", type: "redeem", points: 300 },
    ],
  },
  {
    id: "mem009",
    name: "Daniel Anderson",
    earned: 700,
    redeemed: 150,
    balance: 550,
    transactions: [
      { date: "2025-03-08", type: "earn", points: 300 },
      { date: "2025-06-20", type: "redeem", points: 150 },
      { date: "2025-10-02", type: "earn", points: 400 },
    ],
  },
  {
    id: "mem010",
    name: "Isabella Martinez",
    earned: 1100,
    redeemed: 700,
    balance: 400,
    transactions: [
      { date: "2025-01-20", type: "earn", points: 500 },
      { date: "2025-03-30", type: "redeem", points: 300 },
      { date: "2025-06-12", type: "earn", points: 600 },
      { date: "2025-09-06", type: "redeem", points: 400 },
    ],
  },
];

const mockOffers: Offer[] = [
  { id: "offer01", name: "Use Credit Card", count: 340 },
  { id: "offer02", name: "Open Savings Account", count: 150 },
  { id: "offer03", name: "Set Up Direct Deposit", count: 210 },
  { id: "offer04", name: "Refer a Friend", count: 95 },
  { id: "offer05", name: "Download Mobile App", count: 400 },
];

export { mockMembers, mockOffers };
