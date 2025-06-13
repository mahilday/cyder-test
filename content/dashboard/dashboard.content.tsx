"use client";

import React from "react";
import MetricsCards from "./metrics-card.content";
import { Flex, Space, TableProps, Tag, Typography } from "antd";
import { MemberStats, TableDataType } from "@cd/types/general.type";
import CustomTable from "@cd/components/table.component";
import ChartContent from "../chart/chart.content";
import { useTheme } from "@cd/context/theme.context";
import { sideSectionWrapper } from "./dashboard.style";
import { cyderIColors } from "@cd/theme";
import OfferPieChart from "../chart/offer-pie-chart.content";
import OffersAnalytics from "./offer-analytics.content";
import { ChartFilterProvider } from "@cd/context/filter-chart.context";

interface IDashboardContent {
  members: MemberStats[];
}

const { Title, Text } = Typography;

const columns: TableProps<TableDataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Earned points",
    dataIndex: "earned",
    key: "earned",
  },
  {
    title: "Redeemed points",
    dataIndex: "redeemed",
    key: "redeemed",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
  },
  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const DashboardContent: React.FC<IDashboardContent> = ({ members }) => {
  const { mode } = useTheme();
  const tableData = members.map((member, index) => ({
    key: member.id || String(index),
    name: member.name,
    earned: member?.earned,
    redeemed: member?.redeemed,
    balance: member?.balance,
  }));

  return (
    <Flex style={{ height: "100%", width: "100%" }} gap="20px">
      <section style={{ width: "70%" }}>
        <MetricsCards />
        <ChartFilterProvider>
          <ChartContent />
        </ChartFilterProvider>
        <CustomTable columns={columns} data={tableData || []} />
      </section>
      <section
        style={{
          ...sideSectionWrapper,
          background: cyderIColors(mode)?.surface,
        }}
      >
        <div
          style={{
            background: cyderIColors(mode)?.cardHighlight,
            padding: "24px",
            height: "max-content",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Title
            color={cyderIColors(mode)?.primary}
            level={3}
            style={{ margin: 0 }}
          >
            Welcome back, <em>Mathilda!</em>
          </Title>
          <Text italic>Cyder Credit Union</Text>
        </div>
        <OfferPieChart />
        <OffersAnalytics />
      </section>
    </Flex>
  );
};

export default DashboardContent;
