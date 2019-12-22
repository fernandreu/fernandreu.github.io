import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from '../components';
import { Layout, Container } from '../layouts';
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

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.center = props.center;
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    // TODO: Input validation
    const data = {};
    for (const element of form.elements) {
      if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
        continue;
      }
      data[element.id] = element.value;
    }

    // TODO: Better success / error feedback (e.g. a green / red box next to the buttons saying so)
    fetch('https://5ahuzi98bh.execute-api.eu-west-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then(() => form.reset())
      .catch(error => alert(error));
  }

  render() {
    return (
      <Layout>
        <Helmet title={'Contact Me'} />
        <Header title="Contact Me">
          Software Developer &ndash; Aeronautical Engineer
        </Header>
        <Container center={this.center}>
          <Form method="post" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />

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
  }
}

export default Contact;

Contact.propTypes = {
  center: PropTypes.object,
};
