'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function RotatingAvatar() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={meshRef}>
      {/* Head - Main sphere */}
      <Sphere args={[1, 64, 64]} position={[0, 0.5, 0]} castShadow>
        <MeshDistortMaterial
          color="#0ea5e9"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.2, 32, 32]} position={[-0.35, 0.8, 0.8]} castShadow>
        <meshPhongMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[0.35, 0.8, 0.8]} castShadow>
        <meshPhongMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} />
      </Sphere>

      {/* Body */}
      <mesh position={[0, -1, 0]} castShadow>
        <boxGeometry args={[0.8, 1.5, 0.6]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          distort={0.1}
          speed={1}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Neon accent lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={4}
            array={new Float32Array([-0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d4ff" linewidth={2} />
      </lineSegments>
    </group>
  )
}

export function AvatarCharacter() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-slate-900/20 to-black rounded-lg border border-cyan-500/20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} shadows>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#0ea5e9" />
        <RotatingAvatar />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
      </Canvas>
    </div>
  )
}
