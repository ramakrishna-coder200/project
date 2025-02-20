import  { useState } from 'react';
import { Layout, Menu, Drawer, Button, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from "../assets/Logo.jpg";
import '../App.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
      {/* Logo and Title */}
       <a href="/">
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
         <img
          src={Logo}
          alt="Logo"
          style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }}
        />
        <span
          className="main-title"
          style={{
            fontSize: '18px',
            fontFamily: 'Poppins',
            fontWeight: '600',
            color: '#FFFFFF',
          }}
        >
          Building Services
        </span>
      </div>
        </a>


      {/* Mobile Menu Toggle Button */}
      <Button
        className="mobile-menu-button"
        type="text"
        icon={<MenuOutlined style={{ color: '#FFFFFF', fontSize: '20px' }} />}
        onClick={toggleDrawer}
      />

      {/* Desktop Menu */}
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          background: 'transparent',
          fontFamily: 'Poppins',
        }}
        className="desktop-menu"
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#about-us">About Us</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#contact-us">Contact Us</a>
        </Menu.Item>
      </Menu>

      {/* Drawer for Mobile/Tablet */}
      <Drawer
  title={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: '40px',
          height: '40px',
          marginRight: '10px',
          borderRadius: '50%',
        }}
      />
      <Title level={5} style={{ margin: 0, fontFamily: 'Poppins' }}>
        Building Services
      </Title>
    </div>
  }
  placement="right"
  closable
  onClose={toggleDrawer}
  open={drawerVisible}
  bodyStyle={{ padding: 0 }}
>
  <Menu
    mode="vertical"
    style={{ fontFamily: 'Poppins' }}
    onClick={toggleDrawer} // Add this
  >
    <Menu.Item key="1">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/services">Services</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="#about-us">About Us</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="#contact-us">Contact Us</a>
    </Menu.Item>
  </Menu>
</Drawer>

    </Header>
  );
};

export default AppHeader;
