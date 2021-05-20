import React from 'react';
import './MainLayout.css';
import { Layout, Menu } from 'antd';
import RouterComponent from '../Router/RouterComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Layout className='layout'>
          <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
              <Menu.Item key='1'>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to='/states'>State Wise</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to='/findvaccine'>Find Vaccine</Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to='/about'>About</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <RouterComponent />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Covid-19 Info, Created by Dhananjay Sisode
          </Footer>
        </Layout>
      </Router>
    </React.Suspense>
  );
};

export default MainLayout;
