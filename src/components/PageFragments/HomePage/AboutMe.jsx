import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Muhammad Hunzlah Malik. I'm a student and freelancer who is
    passionate about various web technologies. I like to experiment with different web
    technologies.`,
  paraTwo: `Currently I learning mostly Javascript technologies like ReactJS and NodeJS 
    and pursuing CS from FAST. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'Rolwin',
            'Reevan',
            'Monteiro',
            'FullStack developer',
            'Javascript',
            'ReactJS',
            'NodeJS',
            'Gatsby',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="/location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Bahawalpur, Punjab, Pakistan"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="/web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="/graduation.png"
            alt="graduation image"
            textH4="Pursing Bachelor in"
            textH3="Computer Science from FAST"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
