import { Row, Col, Typography } from 'antd';
import brand1 from '../assets/brands/gcon.jpg';
import brand2 from '../assets/brands/brand2.jpg';
import brand3 from '../assets/brands/brand12.jpg';
import brand4 from '../assets/brands/brand3.jpg';
import brand5 from '../assets/brands/brand4.jpg';
import brand6 from '../assets/brands/brand5.jpg';
import brand7 from '../assets/brands/brand6.jpg';
import brand8 from '../assets/brands/brand7.jpg';
import brand9 from '../assets/brands/brand8.png';
import brand10 from '../assets/brands/brand9.svg.png';
import brand11 from '../assets/brands/brand10.jpg';
import brand12 from '../assets/brands/brand11.png';
import brand13 from '../assets/brands/brand13.jpg';
import React, { memo } from 'react';

const { Title } = Typography;

const AntDMarquee = ({ speed = 60 }) => {
  const images = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11, brand12, brand13
  ];

  return (
    <>
      <Title 
        level={2} 
        style={{
          fontFamily: "Poppins",
          textAlign: 'center', 
          marginBottom: '20px', 
          padding: '10px', 
          borderRadius: '5px',
        }}
      >
        Trusted Partners & Clients
      </Title>
      
      <Row className="marquee">
        <div 
          className="marquee-inner" 
          style={{ animationDuration: `${speed}s` }}
        >
          {images.concat(images).map((src, index) => (
            <Col key={index} className="marquee-item">
            <img src={src} alt={`Logo ${index + 1}`}  />
          </Col>
          
          ))}
        </div>
      </Row>
    </>
  );
};

export default AntDMarquee;
