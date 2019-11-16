import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';

const Par = styled.p`
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: justify;
`;

const List = styled.ul`
  margin-left: 12rem;
  margin-right: 10rem;
  text-align: left;
`;

const About = center => (
  <Layout>
    <Helmet title={'About Fernando Andreu'} />
    <Header title="About Fernando Andreu">
      Software Developer &ndash; Aeronautical Engineer
    </Header>
    <Container center={center}>
      <Par>
        I am an aeronautical engineer who also develops software both during the
        daily job and as personal dedication. For 10+ years, I have been
        developing small applications, useful tools and showcase projects for
        many different purposes.
      </Par>
      <Par>
        As part of this, I have gained extensive experience in several areas,
        including (but not limited to) the following:
      </Par>
      <List>
        <li>
          <b>Programming languages:</b> C#, C++, Python, Java, PHP, Swift
        </li>
        <li>
          <b>Technologies / frameworks:</b> Qt, WPF, ASP.NET, Unity3D, AWS, Git,
          Azure DevOps, GitHub, Trello
        </li>
        <li>
          <b>IDEs:</b> Visual Studio, IntelliJ IDEA, PyCharm, PHPStorm, AppCode,
          Xcode
        </li>
      </List>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
