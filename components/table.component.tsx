import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { TableDataType } from "@cd/types/general.type";

interface ICustomTable {
  columns: TableProps<TableDataType>["columns"];
  data: TableDataType[];
}

const CustomTable: React.FC<ICustomTable> = ({ columns, data }) => (
  <Table<TableDataType> columns={columns} dataSource={data} />
);

export default CustomTable;
