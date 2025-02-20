import { Layout, Row, Col, Typography, Card, Avatar, Divider, Button } from "antd";
import { EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import { Testmonial } from "./mockdata";
const { Content } = Layout;
const { Title, Text } = Typography;

const ReviewsAndMapSection = () => {
  console.log("new page");
  
  return (
    <Content style={{ background: "#f9f9f9", padding: "50px 0" }}>
      {/* Map Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={3} style={{ color: "#333" }}>
          <EnvironmentOutlined style={{ color: "#FF4D4F", marginRight: "10px" }} />
          Find Us Here
        </Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.9271017443456!2d83.20597631583567!3d17.6882588226298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969d2e26df763%3A0x9345db97fdfb2b37!2sKk%20Building%20Solutions%20and%20Services!5e0!3m2!1sen!2sin!4v1693476825345!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Reviews Section */}
      <div style={{ textAlign: "center", padding: "0 20px" }}>
       {/* Testimonials Section */}
       <Content style={{ padding: '50px', background: '#FFFFFF' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px',fontFamily:"Poppins" }}>
          What Our Clients Say
        </Title>
        <Row gutter={[16, 16]} justify="center">
        {Testmonial.map((testimonial, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                style={{ textAlign: 'center', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              >
                <Text style={{ fontStyle: 'italic' }}>&quot;{testimonial.quote}&quot;</Text>
                <Title level={5} style={{ marginTop: '10px' }}>
                  - {testimonial.client}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
        <a href="https://www.google.com/maps/place/Kk+Building+Solutions+and+Services/@17.6865314,83.2059763,15.75z/data=!4m8!3m7!1s0x3a3969d2e26df763:0x9345db97fdfb2b37!8m2!3d17.6882588!4d83.205475!9m1!1b1!16s%2Fg%2F11p68247n6?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">

<Button
  type="primary"
  size="large"
  style={{
    marginTop: "30px",
    backgroundColor: "#FF4D4F",
    borderColor: "#FF4D4F",
  }}
>
  View More Reviews
</Button>
</a>
      </Content>
      </div>
    </Content>
  );
};

export default ReviewsAndMapSection;
