import React from 'react';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

const Tile = ({ type, name, count }) => {
  return (
    <Card type='inner' hoverable={false} style={{ marginTop: 16 }} title={name}>
      <Text strong type={type}>
        {isNaN(count)
          ? count
          : count
              .toString()
              .toLocaleString('en-IN')
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Card>
  );
};

export default Tile;
