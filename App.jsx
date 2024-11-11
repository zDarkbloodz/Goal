import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Scene from './components/Scene';
import { FaBox, FaPencilAlt, FaBullseye, FaBrain, FaWind, FaImage } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  background: linear-gradient(to bottom, #0a0a0a, #1a1a2e, #16213e);
  overflow-x: hidden;
  min-height: 100vh;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const sections = [
  {
    title: "Unpacking Your Goals",
    content: "Break down vague aspirations into specific, actionable sub-goals. This process helps clarify your path and makes the journey less overwhelming.",
    icon: FaBox,
    color: "#00ffff"
  },
  {
    title: "Scripting Your Success",
    content: "Craft powerful 'I did' statements to program your subconscious. This technique leverages the power of positive affirmations to boost confidence and motivation.",
    icon: FaPencilAlt,
    color: "#ff00ff"
  },
  {
    title: "Forming Action Intentions",
    content: "Define clear, concrete actions that will lead to your goal. This step transforms abstract objectives into a practical, step-by-step plan.",
    icon: FaBullseye,
    color: "#00ff00"
  },
  {
    title: "Barrier Brainstorming",
    content: "Anticipate potential obstacles and develop strategies to overcome them. This proactive approach prepares you for challenges and increases your resilience.",
    icon: FaBrain,
    color: "#ff8c00"
  },
  {
    title: "Mastering the 4-2-4 Breathing Technique",
    content: "Learn to manage impulsiveness and maintain focus through controlled breathing. This simple yet powerful technique can help you stay centered in stressful situations.",
    icon: FaWind,
    color: "#1e90ff"
  },
  {
    title: "Embracing the Big Picture",
    content: "Create vivid reminders of your ultimate motivation and long-term vision. Keeping the end goal in sight helps maintain enthusiasm and perseverance throughout your journey.",
    icon: FaImage,
    color: "#ff1493"
  }
];

const App = () => {
  const appRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sections.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#section-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentSection(index),
          onEnterBack: () => setCurrentSection(index),
        });
      });

      ScrollTrigger.create({
        trigger: appRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => setScrollProgress(self.progress),
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <AppContainer ref={appRef}>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene currentSection={currentSection} scrollProgress={scrollProgress} />
        </Canvas>
      </CanvasContainer>
      <ContentContainer>
        <Header />
        {sections.map((section, index) => (
          <Section
            key={index}
            id={`section-${index}`}
            title={section.title}
            content={section.content}
            Icon={section.icon}
            color={section.color}
            index={index}
          />
        ))}
        <Footer />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
