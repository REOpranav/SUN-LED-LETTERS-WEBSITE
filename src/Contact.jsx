import React, { useState } from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';

const ContactForm = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values) => {
    console.log('Submitted:', values);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }} id='contact'>
      <Card title="Contact Us" bordered={false}>
        {!submitted ? (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <p>Thank you for contacting us! We will get back to you soon.</p>
        )}
      </Card>
    </div>
  );
};

const ContactInfo = () => {
  const info = {
    name: 'pranav vadivel',
    phone: '7812817300',
    email: 'pranavavadivel02@gmail.com',
    address: '181 pattappan kovil street, Salem, Tamil Nadu, 637 502'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Card title="Our Contact Information" bordered={false}>
        <p><strong>Name:</strong> {info.name}</p>
        <p><strong>Phone:</strong> {info.phone}</p>
        <p><strong>Email:</strong> {info.email}</p>
        <p><strong>Address:</strong> {info.address}</p>
      </Card>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <ContactForm />
        </Col>
        <Col span={12}>
          <ContactInfo />
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
