import { PieChartOutlined } from "@ant-design/icons";
import useLoading from "@cd/hooks/loading.hook";
import { Avatar, Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import React, { FC } from "react";

interface ICardComponentProps {
  loading: boolean;
  title: string;
  value: number;
  icon: React.ReactNode;
}

const CardComponent: FC<ICardComponentProps> = ({ loading, title, value, icon }) => {
  return (
    <Flex>
      <Card loading={loading} style={{ minWidth: 300 }}>
        <Meta
          avatar={icon}
          title={value}
          description={
            <>
              <p>{title}</p>
            </>
          }
        />
      </Card>
    </Flex>
  );
};

export default CardComponent;
