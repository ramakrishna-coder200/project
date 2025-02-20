import { Layout, Typography, Row, Col, Button, Card, Carousel } from 'antd';
import WaterProof from "../assets/waterproofing.jpeg";
import Flooring from "../assets/flooring.jpeg";
import Construction from "../assets/construction.jpeg";
import AntDMarquee from '../Components/AntdMarquee';
import whtsapp from '../assets/whatsapp.svg'
import ReviewsAndMapSection from '../Components/ReviewsAndMapSection';
import Services from '../Components/Services';
import WhyChooseUs from '../Components/WhyChooseUs';
const {  Content, Footer } = Layout;
const { Title, Text } = Typography;
const stickyIconStyle = {
  position: 'fixed',
  top: '300px',
  right: '20px',
  color: '#25D366',
  zIndex: 1000,
  cursor: 'pointer',
};
const Home = () => {

const getResponsiveFontSize = () => {
  if (window.innerWidth <= 480) return '25px'; // Mobile
  if (window.innerWidth <= 768) return '18px'; // Tablet
  return '48px'; // Default
};
  return (
    <>
      {/* Sticky WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890" // Replace 1234567890 with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        style={stickyIconStyle}
      >
        <img width={50} src={whtsapp} />
      </a>

      {/* Hero Section */}
      <Content
        style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2E4053, #F7DC6F)',
          padding: '80px 20px',
          color: '#FFFFFF',
        }}
      >
 <Title
  level={1}
  style={{
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  }}
  className='font'
>
  Expert Building Services
</Title>
<Text style={{ fontSize:"18px", fontFamily: 'Poppins' }}>
  Transforming spaces with quality and precision
</Text>

        <div style={{ marginTop: '30px',fontFamily:"Poppins" }}>
          <Button type="primary" size="large" style={{ marginRight: '10px',fontFamily:"Poppins" }}>
            Learn More
          </Button>
          <a
        href="https://wa.me/1234567890" // Replace 1234567890 with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
      >
          <Button size="large" style={{fontFamily:"Poppins"}}>Get a Quote</Button>
      </a>
        </div>
      </Content>
    <AntDMarquee />
      {/* Featured Projects Section */}
      <Content style={{ padding: '50px', background: '#FFFFFF' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px',fontFamily:"Poppins" }}>
          Featured Projects
        </Title>
        <Carousel autoplay>
          <div>
            <img
              src={WaterProof}
              alt="Project 1"
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
              />
            <Title level={4} style={{ textAlign: 'center', marginTop: '10px' ,fontFamily:"Poppins" }}>
              Residential Water Proofing
            </Title>
          </div>
          <div>
            <img
              src={Flooring}
              alt="Project 2"
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
              />
            <Title level={4} style={{ textAlign: 'center', marginTop: '10px',fontFamily:"Poppins"  }}>
              Commercial Flooring
            </Title>
          </div>
          <div>
            <img
              src={Construction}
              alt="Project 3"
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
              />
            <Title level={4} style={{ textAlign: 'center', marginTop: '10px' ,fontFamily:"Poppins" }}>
              Structural Repair Solutions
            </Title>
          </div>
        </Carousel>
      </Content>

    <WhyChooseUs />
      {/* About Us Section */}
      <Content style={{ padding: '50px', background: '#F7DC6F', textAlign: 'center',fontFamily:"Poppins"}} id="about-us">
        <Title level={2} style={{ color: '#2E4053', marginBottom: '20px' }}>
          About Us
        </Title>
        <Text style={{ fontSize: '16px', color: '#2E4053',fontFamily:"Poppins"  }}>
          At <strong>KK Building Solutions & Services</strong>, we pride ourselves on delivering exceptional building services, transforming spaces with precision, and ensuring the highest quality standards. With over <strong>2 years of excellence</strong>, we have successfully completed <strong>35+ projects</strong>, building trust with our clients through our commitment to quality and innovation.
        </Text>
        <br />
        <Text style={{ fontSize: '16px', color: '#2E4053' ,fontFamily:"Poppins"}}>
          Our team of <strong>30+ skilled professionals</strong> is dedicated to providing top-notch services in waterproofing, structural repairs, flooring, and more. Certified by <strong>Dr. Fixit "Projects Applicator"</strong> and <strong>Mykarment</strong>, we adhere to the most stringent industry standards, ensuring our services stand out in the building sector.
        </Text>
        <br />
        {/* <Title level={4} style={{ color: '#2E4053', marginTop: '20px' ,fontFamily:"Poppins"}}>
          Contact Details:
        </Title>
        <Text style={{ fontSize: '16px', color: '#2E4053' ,fontFamily:"Poppins"}}>
          <br />
          **Location**: Gajuwaka, Visakhapatnam-530026
          <br />
          **Email**: <a href="mailto:kkbuildingsolutionsandservices@gmail.com">kkbuildingsolutionsandservices@gmail.com</a>
          <br />
          **Phone**: (123) 456-7890
        </Text>
        <div style={{ marginTop: '20px',fontFamily:"Poppins" }}>
          <img
            src="/path/to/iso-logo.png"
            alt="ISO 9001:2015 Certification"
            style={{ maxWidth: '100px', filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}
          />
        </div> */}
      </Content>

  
      <ReviewsAndMapSection />

    </>
  );
};

export default Home;
