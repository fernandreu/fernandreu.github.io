import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';

const Form = styled.form`
  display: grid;
  margin: 0 auto 0 auto;
  max-width: 600px;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1rem;
  label {
    text-align: right;
    margin-right: 1rem;
  }
  .buttons {
    grid-column: 2;
  }
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
      <Form method="post" action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" />

        <div className="buttons">
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </div>
      </Form>
    </Container>
  </Layout>
);

export default Contact;

Contact.propTypes = {
  center: PropTypes.object,
};
