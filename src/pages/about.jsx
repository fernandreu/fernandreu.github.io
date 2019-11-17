import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';

const Contents = styled.div`
  margin: 0 auto 0 auto;
  max-width: 700px;
`;

const Par = styled.p`
  text-align: justify;
`;

const List = styled.ul`
  margin-left: 2rem;
  text-align: left;
`;

const About = center => (
  <Layout>
    <Helmet title={'About Me'} />
    <Header title="About Me">
      Software Developer &ndash; Aeronautical Engineer
    </Header>
    <Container center={center}>
      <Contents>
        <Par>
          I am an aeronautical engineer who also develops software both during
          the daily job and as personal dedication. For 10+ years, I have been
          developing small applications, useful tools and showcase projects for
          many different purposes.
        </Par>
        <Par>
          As part of this, I have gained extensive experience in several areas,
          including (but not limited to) the following:
        </Par>
        <List>
          <li>
            <b>Programming languages:</b> C#, C++, Python, Java, JavaScript,
            TypeScript, PHP, Swift
          </li>
          <li>
            <b>Technologies / frameworks:</b> Qt, WPF, ASP.NET, Angular, React,
            Unity3D, AWS, Git, Azure DevOps, GitHub, Trello
          </li>
          <li>
            <b>IDEs:</b> Visual Studio, Visual Studio Code, IntelliJ IDEA,
            PyCharm, PHPStorm, AppCode, Xcode
          </li>
        </List>
      </Contents>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
