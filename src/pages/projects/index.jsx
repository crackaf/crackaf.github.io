import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

export default function projects() {
  useEffect(() => {
    navigate('/tags/project');
  });

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title="Contact"
          description="Hello folks Hunzlah here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys.
                    Find me on github - crackaf."
          path="/contact"
          keywords={[
            'Muhammad',
            'Hunzlah',
            'Malik',
            'FullStack developer',
            'C++',
            'Python',
            'Javascript',
            'ReactJS',
            'FAST',
          ]}
        />
        <Header />
        <SidebarWrapper>
          Redirecting to Projects. If not <Link to="/tags/project">Click Here</Link>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
}
