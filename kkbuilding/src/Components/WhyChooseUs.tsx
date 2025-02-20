import { Row, Col, Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Quality Assurance',
      description: 'We ensure the highest standards with thorough quality checks at every stage.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#4caf50' }} />,
    },
    {
      title: 'On-Time Delivery',
      description: 'We guarantee project completion within the committed timeline.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#ff9800' }} />,
    },
    {
      title: 'Professional Service',
      description: 'Our experienced professionals ensure seamless execution.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#2196f3' }} />,
    },
    {
      title: '10-Year Warranty',
      description: 'We offer a 10-year warranty on our services for peace of mind.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#9c27b0' }} />,
    },
    {
      title: '35+ Successful Projects',
      description: 'We have a proven track record of delivering over 35 successful projects.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#ff5722' }} />,
    },
    {
      title: 'Reliable Teamwork',
      description: 'Our dedicated team works collaboratively for the best outcomes.',
      icon: <CheckCircleOutlined style={{ fontSize: '40px', color: '#607d8b' }} />,
    },
  ];

  return (
    <div style={{ padding: '60px 20px', background: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Poppins' }}>
        Why Choose Us?
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {reasons.map((reason, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                textAlign: 'center',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                background: 'white',
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ marginBottom: '20px' }}>{reason.icon}</div>
              <Title level={4} style={{ fontSize: '18px', marginBottom: '10px' }}>
                {reason.title}
              </Title>
              <Text style={{ color: '#555', fontSize: '14px' }}>{reason.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyChooseUs;
