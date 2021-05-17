import React from 'react';
import { Layout, Row, Col } from 'antd';
import FA from 'react-fontawesome';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';
import style from '../../components/PageLayout/Sidebar/sidebar.module.less';
import Config from '../../../config';

const {
  facebook, github, instagram, twitter,
} = Config.social;

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Hello folks Hunzlah here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys.
                    Find me on github - ghostdart."
        path="/contact"
        keywords={['Muhammad', 'Hunzlah', 'Malik', 'FullStack developer', 'C++', 'Python', 'Javascript', 'ReactJS', 'FAST']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <div className="centerAlign box">
          <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><FA name="facebook-f" size="2x" /></a>
          <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FA name="twitter" size="2x" /></a>
          <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" size="2x" /></a>
          <a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FA name="instagram" size="2x" /></a>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
