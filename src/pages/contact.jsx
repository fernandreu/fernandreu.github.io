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

const Contact = center => (
  <Layout>
    <Helmet title={'Contact Fernando Andreu'} />
    <Header title="Contact Fernando Andreu">
      Software Developer &ndash; Aeronautical Engineer
    </Header>
    <Container center={center}>
      TBD
    </Container>
  </Layout>
);

export default Contact;

Contact.propTypes = {
  center: PropTypes.object,
};
