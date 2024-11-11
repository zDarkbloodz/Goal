import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #00ffff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ff00ff;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer style={{ boxShadow: scrolled ? '0 2px 10px rgba(0,255,255,0.1)' : 'none' }}>
      <Nav>
        <Logo>Goal Pursuit</Logo>
        <NavLinks>
          <NavLink href="#section-0">Unpacking</NavLink>
          <NavLink href="#section-1">Scripting</NavLink>
          <NavLink href="#section-2">Actions</NavLink>
          <NavLink href="#section-3">Barriers</NavLink>
          <NavLink href="#section-4">Breathing</NavLink>
          <NavLink href="#section-5">Big Picture</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
