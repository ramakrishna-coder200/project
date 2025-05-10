import { Row, Col, Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { services } from './mockdata';
import { Layout } from 'antd';

const { Title, Text } = Typography;
const {  Content } = Layout;

const Services = () => {
  return (
    <Content style={{ padding: '50px', background: '#FFFFFF' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', fontFamily: "Poppins" }}>
        Our Services
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {services.map((service:any, index:number) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out', // Smooth transition for hover effect
                height:'200px'
              }}
              className="service-card" // Apply custom class for hover effect
            >
              <CheckCircleOutlined
                style={{ fontSize: '40px', color: 'green', marginBottom: '20px' }}
              />
              <Title level={4}>{service.title}</Title>
              <Text>{service.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Services;
