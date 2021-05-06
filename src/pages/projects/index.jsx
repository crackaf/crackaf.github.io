import React from 'react'
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

export default function projects() {
  return (
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
          hello
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
}
