import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease-in-out;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 2;
  opacity: ${props => props.inView ? 1 : 0};
  transform: translateY(${props => props.inView ? 0 : '50px'});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.color};
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${props => props.color};
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Section = ({ id, title, content, Icon, color, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <SectionContainer id={id} ref={ref}>
      <Content inView={inView}>
        <IconWrapper color={color}>
          <Icon />
        </IconWrapper>
        <Title color={color}>{title}</Title>
        <Description>{content}</Description>
      </Content>
    </SectionContainer>
  );
};

export default Section;
