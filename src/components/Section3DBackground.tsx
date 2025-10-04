import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingElement({ position, type }: { position: [number, number, number], type: 'play' | 'camera' | 'clip' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (type === 'play') {
    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={meshRef} position={position}>
          <mesh>
            <circleGeometry args={[0.3, 32]} />
            <meshStandardMaterial 
              color="#6366f1" 
              transparent 
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0.05, 0, 0.05]}>
            <coneGeometry args={[0.1, 0.2, 3]} />
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
        </group>
      </Float>
    );
  }

  if (type === 'camera') {
    return (
      <Float speed={1} rotationIntensity={0.3} floatIntensity={1.5}>
        <group ref={meshRef} position={position}>
          <mesh>
            <boxGeometry args={[0.5, 0.3, 0.4]} />
            <meshStandardMaterial color="#6366f1" transparent opacity={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.18, 0.2, 16]} />
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} metalness={0.9} />
          </mesh>
        </group>
      </Float>
    );
  }

  // clip
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        <mesh>
          <boxGeometry args={[0.6, 0.1, 0.05]} />
          <meshStandardMaterial color="#a78bfa" transparent opacity={0.4} metalness={0.6} />
        </mesh>
        {[-0.2, 0, 0.2].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.15, 0.15, 0.06]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#6366f1" : "#8b5cf6"} 
              transparent 
              opacity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8b5cf6" />
      
      <FloatingElement position={[-2, 1, -2]} type="play" />
      <FloatingElement position={[2, -1, -3]} type="camera" />
      <FloatingElement position={[0, 1.5, -2.5]} type="clip" />
      <FloatingElement position={[-1.5, -0.5, -3]} type="play" />
      <FloatingElement position={[1.5, 0.5, -2]} type="camera" />
    </>
  );
}

const Section3DBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Section3DBackground;
