'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function AnimatedCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Mesh>(null)
  const rightArmRef = useRef<THREE.Mesh>(null)
  const [time, setTime] = useState(0)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }

    // Head tilt animation
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      headRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.15
    }

    // Arm wave animation
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.8
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(state.clock.elapsedTime * 1.5) * 0.6
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <Box args={[0.6, 1.2, 0.4]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.4} />
      </Box>

      {/* Head */}
      <Sphere ref={headRef} args={[0.35, 32, 32]} position={[0, 0.9, 0]} castShadow>
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} emissive="#0ea5e9" emissiveIntensity={0.4} />
      </Sphere>

      {/* Eyes - Glowing */}
      <Sphere args={[0.12, 16, 16]} position={[-0.15, 1.05, 0.3]} castShadow>
        <meshBasicMaterial color="#00ff88" />
      </Sphere>
      <Sphere args={[0.12, 16, 16]} position={[0.15, 1.05, 0.3]} castShadow>
        <meshBasicMaterial color="#00ff88" />
      </Sphere>

      {/* Left Arm */}
      <Box
        ref={leftArmRef}
        args={[0.25, 0.8, 0.25]}
        position={[-0.45, 0.3, 0]}
        castShadow
      >
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
      </Box>

      {/* Right Arm */}
      <Box
        ref={rightArmRef}
        args={[0.25, 0.8, 0.25]}
        position={[0.45, 0.3, 0]}
        castShadow
      >
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
      </Box>

      {/* Legs */}
      <Box args={[0.25, 0.8, 0.25]} position={[-0.2, -0.8, 0]} castShadow>
        <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.4} />
      </Box>
      <Box args={[0.25, 0.8, 0.25]} position={[0.2, -0.8, 0]} castShadow>
        <meshStandardMaterial color="#0a0a0a" metalness={0.6} roughness={0.4} />
      </Box>

      {/* Neon aura */}
      <Sphere args={[1.3, 32, 32]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </group>
  )
}

export function AnimatedCharacterComponent() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-slate-900/20 to-black rounded-lg border border-cyan-500/20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }} shadows>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#0ea5e9" />
        <pointLight position={[0, 0, 8]} intensity={1} color="#00ff88" />
        <AnimatedCharacter />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
