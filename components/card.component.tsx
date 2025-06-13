import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import React, { FC } from "react";

interface ICardComponentProps {
  loading: boolean;
  title: string;
  value: number;
  icon: React.ReactNode;
}

const CardComponent: FC<ICardComponentProps> = ({
  loading,
  title,
  value,
  icon,
}) => {
  return (
    <Flex flex="1 1 calc(33.333% - 16px)">
      <Card loading={loading} style={{ width: "100%" }}>
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
