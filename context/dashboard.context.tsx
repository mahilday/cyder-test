"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type MemberStats = {
  memberId: string;
  name: string;
  pointsEarned: number;
  pointsRedeemed: number;
  active: boolean;
};

type DashboardData = {
  activeMembersCount: number;
  totalPoints: number;
  activePoints: number;
  members: MemberStats[];
};

type DashboardContextType = {
  data: DashboardData | null;
  isLoading: boolean;
  refreshData: () => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     // Simulated async fetch (replace with API later)
  //     await new Promise((res) => setTimeout(res, 1000));

  //     const mockData: DashboardData = {
  //       activeMembersCount: 7,
  //       totalPoints: 21000,
  //       activePoints: 18500,
  //       members: [
  //         {
  //           memberId: "mem_001",
  //           name: "Alice",
  //           pointsEarned: 3000,
  //           pointsRedeemed: 500,
  //           active: true,
  //         },
  //         {
  //           memberId: "mem_002",
  //           name: "Bob",
  //           pointsEarned: 2000,
  //           pointsRedeemed: 2000,
  //           active: false,
  //         },
  //         // ...add 8 more mock members
  //       ],
  //     };

  //     setData(mockData);
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <DashboardContext.Provider
      value={{ data, isLoading, refreshData: () => {} }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};
