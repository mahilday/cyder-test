"use client";

import React, { useEffect, useState } from "react";
import { Typography, List, Divider } from "antd";
import { getOfferStats } from "@cd/app/actions/offers";
import { Offer } from "@cd/types/general.type";

const { Title, Text } = Typography;

const OffersAnalytics = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [mostPopular, setMostPopular] = useState<Offer | null>(null);
  const [leastPopular, setLeastPopular] = useState<Offer | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await getOfferStats();
      setOffers(res.sortedOffers);
      setMostPopular(res.mostPopular);
      setLeastPopular(res.leastPopular);
    };
    fetchStats();
  }, []);

  return (
    <div style={{ padding: "10px 24px" }}>
      <Title level={5}>Member Offer Engagement</Title>
      <Divider size="small" orientationMargin={5} />
      {mostPopular && (
        <Text strong>
          Most Popular: {mostPopular.name} ({mostPopular.count} uses)
        </Text>
      )}
      <br />
      {leastPopular && (
        <Text type="secondary">
          Least Popular: {leastPopular.name} ({leastPopular.count} uses)
        </Text>
      )}
      <List
        dataSource={offers}
        renderItem={(item) => (
          <List.Item>
            <Text>{item.name}</Text>
            <Text type="secondary" style={{ marginLeft: "auto" }}>
              {item.count} uses
            </Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default OffersAnalytics;
