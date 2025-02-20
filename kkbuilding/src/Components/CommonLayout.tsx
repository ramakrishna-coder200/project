import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
const { Footer } = Layout;
import {
    PhoneOutlined,
    MailOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
  } from '@ant-design/icons';
import AppFooter from './AppFooter';
const CommonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("one");
  
  return (
    <Layout style={{ width: '100%' }}>
    {/* Header Section */}
  <AppHeader/>
{children}
    {/* Footer Section */}
    <Footer style={{ textAlign: 'center', background: '#2E4053', color: '#FFFFFF' }}>
      <div>
        <a href='tel:+918297759126' style={{color:"#fff"}}> <PhoneOutlined />{' '}+918297759126</a> | {' '}
        <a href="mailto:kkbuildingsolutionsandservices@gmail.com" style={{ color: '#FFFFFF',fontFamily:"Poppins" }}>
        <MailOutlined />{' '} kkbuildingsolutionsandservices@gmail.com
        </a>
      </div>
      <div style={{ marginTop: '10px' }}>
        <FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
        <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
      </div>
      <div style={{ marginTop: '20px' }}>© 2024 KK Building Solutions & Services</div>
    </Footer>
    {/* <AppFooter/> */}
  </Layout>
  );
};

export default CommonLayout;
