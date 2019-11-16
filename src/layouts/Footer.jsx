import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin } from 'react-icons/all';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Icon = styled.a`
  font-size: 32px;
  padding-right: 1rem;
  color: ${props => props.theme.colors.white.light};
  vertical-align: middle;
`;

const Separator = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>Fernando Andreu</span>
      <Separator>&ndash;</Separator>
      <Icon href="https://uk.linkedin.com/in/fernandoandreu/en">
        <FaLinkedin />
      </Icon>
      <Icon href="https://github.com/fernandreu">
        <FaGithub />
      </Icon>
    </Text>
  </Wrapper>
);
export default Footer;
