import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <p>As you are reading this, I'll be working on some new technology stack or Harnising the current ones.</p>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="C/C++"
        />
        <ProgressBar
          percent={80}
          text="Python"
        />
        <ProgressBar
          percent={70}
          text="Javascript"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Django"
        />
        <ProgressBar
          percent={60}
          text="ReactJS"
        />
        <ProgressBar
          percent={70}
          text="NodeJS"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
