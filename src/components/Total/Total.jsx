import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import DataGridShow from '../DataGridShow/DataGridShow';
const Total = () => {
  const [total, setTotal] = useState({});

  const fetchData = async () => {
    try {
      let covidData = await fetch('https://api.covid19india.org/data.json');
      covidData = await covidData.json();
      console.log();
      setTotal(covidData?.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>India</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <DataGridShow name='India' total={total && total} />
      </div>
    </>
  );
};

export default Total;
