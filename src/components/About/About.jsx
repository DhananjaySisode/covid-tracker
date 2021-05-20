import React from 'react';
import { Breadcrumb } from 'antd';
import { Card, Avatar } from 'antd';
import dhananjaySisode from '../../assets/images/dhananjay_sisode.jpg';

const { Meta } = Card;

const About = () => {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <Card
          title='Developer'
          style={{ width: 300, marginTop: 16 }}
          extra={<a href='http://dhananjaysisode.netlify.com/'>Connect</a>}
        >
          <Meta
            avatar={<Avatar src={dhananjaySisode} />}
            title='Dhananjay Sisode'
            description='Product Developer'
          />
        </Card>
      </div>
    </>
  );
};

export default About;
