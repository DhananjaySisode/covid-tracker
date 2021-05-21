import React, { useEffect, useState } from 'react';
import { Select, Typography } from 'antd';
import { Breadcrumb } from 'antd';
import DataGridShow from '../DataGridShow/DataGridShow';

const { Title } = Typography;
const { Option } = Select;

const StateWise = () => {
  const [allData, setAllData] = useState({});
  const [state, setState] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStateData, setSelectedStateData] = useState({});

  const handleChange = (value) => {
    setSelectedState(value);
    let data = allData.filter((x) => x.state === value);
    setSelectedStateData(data && data[0]);
  };

  const fetchData = async () => {
    try {
      let covidData = await fetch('https://api.covid19india.org/data.json');
      covidData = await covidData.json();
      setState([
        ...new Set(
          covidData?.statewise
            .slice(1, covidData?.statewise.length)
            .map((it) => it.state)
        )
      ]);
      setAllData(covidData?.statewise.slice(1, covidData?.statewise.length));
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
        <Breadcrumb.Item>{selectedState && selectedState}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <Select
          showSearch
          placeholder='Select a state'
          optionFilterProp='children'
          style={{ width: '100%', maxWidth: 500 }}
          onChange={handleChange}
        >
          {state &&
            state.map(
              (st) =>
                st !== 'State Unassigned' && (
                  <Option key={st} value={st}>
                    {st}
                  </Option>
                )
            )}
        </Select>
        {selectedState ? (
          <DataGridShow name={selectedState} total={selectedStateData} />
        ) : (
          <Title type='warning' level={5}>
            No state selected!
          </Title>
        )}
      </div>
    </>
  );
};

export default StateWise;
