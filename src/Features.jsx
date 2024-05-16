import React from 'react';
import { Row, Col, Card } from 'antd';
import './FeaturesPage.css';

const features = [
  {
    title: 'High Brightness',
    description: 'Our LED sign boards are visible even in direct sunlight.',
    image: 'https://i.pinimg.com/564x/a2/c8/5e/a2c85e38f804a52bc9cb4f9dae6c8082.jpg',
  },
  {
    title: 'Energy Efficient',
    description: 'Consume less power while providing superior performance.',
    image: 'https://i.pinimg.com/236x/e2/3c/eb/e23cebbf3dbfa07ab0ad236fac08c93e.jpg',
  },
  {
    title: 'Durable Design',
    description: 'Built to last with weather-resistant materials.',
    image: 'https://i.pinimg.com/564x/eb/d1/ec/ebd1ec5853c219697b77a263356ac540.jpg',
  },
  {
    title: 'Customizable',
    description: 'Easily customize your messages and animations.',
    image: 'https://i.pinimg.com/236x/e4/be/58/e4be58e61c1b471b580c6ab018497f4a.jpg',
  },
  {
    title: 'Remote Control',
    description: 'Control your LED sign board remotely with our app.',
    image: 'https://i.pinimg.com/236x/46/84/e2/4684e24cbd0d55d83e0affc8c020f48d.jpg',
  },
  {
    title: 'Multiple Sizes',
    description: 'Available in various sizes to fit your needs.',
    image: 'https://i.pinimg.com/736x/33/cc/cb/33cccb99d2b297094fb9b17fab476401.jpg',
  },
];

const FeaturesPage = () => {
  return (
    <div className="features-page" id='features'>
      <Row gutter={[17, 17]}>
        {features.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              title={feature.title}
              bordered={false}
              className="feature-card"
              cover={<img alt={feature.title} src={feature.image} className="feature-image" />}
            >
              <p>{feature.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesPage;
