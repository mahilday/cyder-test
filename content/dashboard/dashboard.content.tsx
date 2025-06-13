"use client";

import React from "react";
import MetricsCards from "./metrics-card.content";
import { Flex, Space, TableProps, Tag } from "antd";
import { MemberStats, TableDataType } from "@cd/types/general.type";
import CustomTable from "@cd/components/table.component";

interface IDashboardContent {
  members: MemberStats[];
}

const columns: TableProps<TableDataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
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
  const tableData = members.map((member, index) => ({
    key: member.id || String(index),
    name: member.name,
    earned: member?.earned,
    redeemed: member?.redeemed,
    balance: member?.balance,
    // tags: ["active", "member"],
  }));

  return (
    <Flex justify="space-between">
      <section>
        <MetricsCards />
        <CustomTable columns={columns} data={tableData || []} />
      </section>
      <section></section>
    </Flex>
  );
};

export default DashboardContent;
