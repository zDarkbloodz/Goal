import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: #00ffff;
  text-align: center;
  padding: 2rem 0;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Futuristic Goal Pursuit Experience. All rights reserved.</p>
      <p>Empowering your journey to success through cutting-edge visualization.</p>
    </FooterContainer>
  );
};

export default Footer;
