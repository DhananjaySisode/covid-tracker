import React from 'react';
import { Row, Col, Divider } from 'antd';
import Tile from '../Tile/Tile';

const DataGridShow = ({ name, total }) => {
  return (
    <div className='site-card-wrapper'>
      {console.log(name)}
      {console.log(total)}
      <Divider orientation='left'>{name}</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className='gutter-row'
          span={6}
        >
          <Tile type='' name='Confirmed' count={total && total?.confirmed} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className='gutter-row'
          span={6}
        >
          <Tile type='warning' name='Active' count={total && total?.active} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className='gutter-row'
          span={6}
        >
          <Tile
            type='success'
            name='Recovered'
            count={total && total?.recovered}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className='gutter-row'
          span={6}
        >
          <Tile type='danger' name='Deaths' count={total && total?.deaths} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          xl={6}
          className='gutter-row'
          span={6}
        >
          <Tile
            type='secondary'
            name='Last Updated On'
            count={total && total?.lastupdatedtime + ' (IST)'}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DataGridShow;
