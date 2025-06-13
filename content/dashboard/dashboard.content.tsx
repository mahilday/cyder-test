"use client";

import React from "react";
import MetricsCards from "./metrics-card.content";
import { Col, Divider, Row, Space, TableProps, Typography } from "antd";
import {
  DashboardMetrics,
  MemberStats,
  TableDataType,
} from "@cd/types/general.type";
import CustomTable from "@cd/components/table.component";
import ChartContent from "../chart/chart.content";
import { useTheme } from "@cd/context/theme.context";
import { sideSectionWrapper } from "./dashboard.style";
import { cyderIColors } from "@cd/theme";
import OfferPieChart from "../chart/offer-pie-chart.content";
import OffersAnalytics from "./offer-analytics.content";
import { ChartFilterProvider } from "@cd/context/filter-chart.context";
import { ChartDataPoint } from "@cd/app/actions/charts";

interface IDashboardContent {
  members: MemberStats[];
  metricsData: DashboardMetrics;
  chartData: ChartDataPoint[];
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

const DashboardContent: React.FC<IDashboardContent> = ({
  members,
  metricsData,
  chartData,
}) => {
  const { mode } = useTheme();
  const tableData = members.map((member, index) => ({
    key: member.id || String(index),
    name: member.name,
    earned: member?.earned,
    redeemed: member?.redeemed,
    balance: member?.balance,
  }));

  return (
    <Row gutter={[20, 20]} style={{ width: "100%", height: "100%" }}>
      <Col xs={24} md={16}>
        <MetricsCards metrics={metricsData} />
        <section style={{ width: "100%" }}>
          <ChartFilterProvider>
            <ChartContent chartData={chartData} />
          </ChartFilterProvider>
          <CustomTable columns={columns} data={tableData || []} />
        </section>
      </Col>

      <Col xs={24} md={8}>
        <section
          style={{
            ...sideSectionWrapper,
            background: cyderIColors(mode)?.cardHighlight,
          }}
          className="hide-scrollbar"
        >
          <div
            style={{
              background: cyderIColors(mode)?.border,
              padding: "24px",
              height: "max-content",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <Title
              level={3}
              style={{ margin: 0, color: cyderIColors(mode)?.primary }}
            >
              Welcome back, Mathilda!
            </Title>
            <Text italic>Cyder Credit Union</Text>
          </div>
          <OffersAnalytics />
          <Divider size="middle" orientationMargin={5} />
          <OfferPieChart />
        </section>
      </Col>
    </Row>
  );
};

export default DashboardContent;
