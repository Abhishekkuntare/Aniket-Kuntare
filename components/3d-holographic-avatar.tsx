'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus, Cone } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

function HolographicAvatar() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x = mousePos.y * 0.1
      groupRef.current.rotation.z = mousePos.x * 0.1
    }

    // Core pulse
    if (coreRef.current) {
      coreRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      coreRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      coreRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }

    // Orbit rotation
    if (orbitRef.current) {
      orbitRef.current.rotation.x += 0.005
      orbitRef.current.rotation.y += 0.003
      orbitRef.current.rotation.z += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main holographic sphere */}
      <Sphere args={[0.8, 64, 64]} castShadow>
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.1}
          wireframe={false}
        />
      </Sphere>

      {/* Core energy */}
      <Sphere ref={coreRef} args={[0.3, 32, 32]} castShadow>
        <meshBasicMaterial color="#00ff88" />
      </Sphere>

      {/* Outer glow sphere */}
      <Sphere args={[1.2, 32, 32]} castShadow>
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.15}
          wireframe={false}
          emissive="#0ea5e9"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Orbiting torus rings */}
      <group ref={orbitRef}>
        <Torus args={[1.5, 0.1, 16, 32]} rotation={[0.5, 0, 0.5]} castShadow>
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.8}
            metalness={0.9}
          />
        </Torus>
        <Torus args={[1.2, 0.08, 16, 32]} rotation={[0.3, 0.5, 0.3]} castShadow>
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.6}
            metalness={0.9}
          />
        </Torus>
        <Torus args={[0.9, 0.06, 16, 32]} rotation={[0, 0.3, 0]} castShadow>
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
            metalness={0.9}
          />
        </Torus>
      </group>

      {/* Energy spikes */}
      {[...Array(8)].map((_, i) => (
        <Cone
          key={i}
          args={[0.3, 1, 8]}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.8,
            Math.sin((i / 8) * Math.PI * 2) * 1.8,
            0,
          ]}
          rotation={[0, 0, (i / 8) * Math.PI * 2]}
          castShadow
        >
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.4}
            metalness={0.7}
          />
        </Cone>
      ))}

      {/* Cybersecurity shield lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={24}
            array={new Float32Array([
              -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, -1, -1,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d4ff" linewidth={2} />
      </lineSegments>
    </group>
  )
}

export function HolographicAvatarComponent() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-slate-900/30 to-black rounded-lg border border-cyan-500/30 overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} shadows>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff88" />
        <pointLight position={[-10, -10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[0, 0, 15]} intensity={1} color="#0ea5e9" />
        <HolographicAvatar />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
