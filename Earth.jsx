import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 3, 5]} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </mesh>
    </>
  );
};

export default Earth;
