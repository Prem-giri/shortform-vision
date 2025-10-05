import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Camera({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <group ref={groupRef} position={position}>
        {/* Camera body */}
        <mesh>
          <boxGeometry args={[1, 0.6, 0.8]} />
          <meshStandardMaterial color="#6366f1" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Lens */}
        <mesh position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.4, 32]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* Viewfinder */}
        <mesh position={[0.3, 0.4, -0.2]}>
          <boxGeometry args={[0.2, 0.15, 0.15]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Clapperboard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={meshRef} position={position}>
        {/* Bottom board */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.05, 0.8]} />
          <meshStandardMaterial color="#1f2937" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Top clapper */}
        <mesh position={[0, 0.15, -0.2]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.2, 0.05, 0.4]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.2} roughness={0.8} />
        </mesh>
        {/* Black and white stripes */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[-0.45 + i * 0.3, 0.15, -0.2]} rotation={[-0.3, 0, 0]}>
            <boxGeometry args={[0.25, 0.05, 0.4]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#000000" : "#ffffff"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function FilmReel({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        {/* Main reel */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
          <meshStandardMaterial color="#6366f1" metalness={0.8} roughness={0.2} transparent opacity={0.7} />
        </mesh>
        {/* Center hub */}
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Spokes */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 2, 0]}>
            <boxGeometry args={[0.05, 0.15, 0.8]} />
            <meshStandardMaterial color="#a78bfa" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Timeline({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef} position={position}>
        {/* Timeline base */}
        <mesh>
          <boxGeometry args={[2, 0.1, 0.05]} />
          <meshStandardMaterial color="#6366f1" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
        </mesh>
        {/* Clips on timeline */}
        {[-0.6, -0.2, 0.3, 0.7].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.25, 0.2, 0.08]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#8b5cf6" : "#a78bfa"} 
              metalness={0.6} 
              roughness={0.4} 
              transparent 
              opacity={0.8}
            />
          </mesh>
        ))}
        {/* Playhead */}
        <mesh position={[0.5, 0.3, 0]}>
          <boxGeometry args={[0.05, 0.5, 0.05]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
        </mesh>
      </group>
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
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.7} color="#6366f1" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#8b5cf6" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={1} color="#a78bfa" />
      
      {/* Cameras */}
      <Camera position={[-3.5, 2, -3]} />
      <Camera position={[3.5, -1.5, -4]} />
      
      {/* Clapperboards */}
      <Clapperboard position={[2.5, 1.5, -2.5]} />
      <Clapperboard position={[-2.8, -1, -3.5]} />
      
      {/* Film Reels */}
      <FilmReel position={[-4, 0, -4]} />
      <FilmReel position={[4, 2.5, -5]} />
      <FilmReel position={[1, -2, -3]} />
      
      {/* Timelines */}
      <Timeline position={[0, 3, -4]} />
      <Timeline position={[-1, -2.5, -5]} />
      
      {/* Play buttons */}
      <PlayButton position={[2, 0, -2]} />
      <PlayButton position={[-3, 1.5, -3]} />
      
      {/* Spheres for depth */}
      <AnimatedSphere position={[5, -1, -6]} color="#6366f1" />
      <AnimatedSphere position={[-5, 2.5, -5]} color="#8b5cf6" />
      <AnimatedSphere position={[0, -3.5, -7]} color="#a78bfa" />
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
