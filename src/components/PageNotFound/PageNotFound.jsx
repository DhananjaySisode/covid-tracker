import React from 'react';
import './PageNotFound.css';
// import pageNotFoundLogo from '../../assets/images/pnf-circle.png';
import { Typography } from 'antd';
const { Title } = Typography;
export default function PageNotFound() {
  return (
    <div className='site-layout-content'>
      <div className='page-not-found-container'>
        <div className='pnf-details'>
          {/* <img src={pageNotFoundLogo} height='250' width='300' alt="404"/> */}
          <div className='pnf-error-warning'>
            <Title type='danger' level={3}>
              Oops!
            </Title>
          </div>
          <div className='pnf-error-message'>
            <Title type='' level={4}>
              Page not found
            </Title>
          </div>
          <div className='pnf-error-pnf'>
            <Title type='secondary' level={4}>
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
}
