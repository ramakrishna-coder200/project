import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ background: '#1C2D40', color: '#fff', padding: '40px 0' }}>
      <Row gutter={[24, 16]} justify="center">
        {/* Contact Information */}
        <Col xs={24} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '16px', fontWeight: '600' }}>Contact Us</Text>
          <div style={{ marginTop: '10px' }}>
            <PhoneOutlined style={{ fontSize: '24px', marginRight: '10px', color: '#ffffff' }} />
            <Text style={{ fontSize: '16px' }}>8297759126</Text>
          </div>
          <div style={{ marginTop: '10px' }}>
            <MailOutlined style={{ fontSize: '24px', marginRight: '10px', color: '#ffffff' }} />
            <Text style={{ fontSize: '16px' }}>
              <a
                href="mailto:Kkbsaservices@gmail.com"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Kkbsaservices@gmail.com
              </a>
            </Text>
          </div>
        </Col>

        {/* Social Media Links */}
        <Col xs={24} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '16px', fontWeight: '600' }}>Follow Us</Text>
          <div style={{ marginTop: '10px' }}>
            <FacebookOutlined
              style={{
                fontSize: '30px',
                marginRight: '20px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
            <TwitterOutlined
              style={{
                fontSize: '30px',
                marginRight: '20px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#1da1f2')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
            <InstagramOutlined
              style={{
                fontSize: '30px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#e4405f')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            />
          </div>
        </Col>

        {/* Copyright Section */}
        <Col xs={24} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '14px' }}>
            © 2024 KK Building Solutions & Services | All Rights Reserved
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
