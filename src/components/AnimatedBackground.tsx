import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingFilmStrip({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.3, 1.5, 0.1]} />
        <meshStandardMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function PlayButton({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[0.5, 32]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        transparent 
        opacity={0.4}
        side={THREE.DoubleSide}
      />
      <mesh position={[0.1, 0, 0.05]}>
        <coneGeometry args={[0.15, 0.3, 3]} />
        <meshStandardMaterial color="#a78bfa" />
      </mesh>
    </mesh>
  );
}

function AnimatedSphere({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere args={[0.4, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.3}
          distort={0.5}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
      
      {/* Film strips */}
      <FloatingFilmStrip position={[-3, 1, -2]} />
      <FloatingFilmStrip position={[3, -1, -3]} />
      <FloatingFilmStrip position={[-2, -2, -4]} />
      
      {/* Play buttons */}
      <PlayButton position={[2, 2, -2]} />
      <PlayButton position={[-2.5, 0, -3]} />
      
      {/* Spheres */}
      <AnimatedSphere position={[4, 0, -5]} color="#6366f1" />
      <AnimatedSphere position={[-4, 2, -4]} color="#8b5cf6" />
      <AnimatedSphere position={[0, -3, -6]} color="#a78bfa" />
    </>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
