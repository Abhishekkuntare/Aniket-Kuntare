'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [scale, setScale] = useState(1)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial 
        color="#00d9ff" 
        wireframe={true}
        emissive="#00a8cc"
        emissiveIntensity={0.5}
      />
      <boxGeometry args={[2.1, 2.1, 2.1]} />
      <meshPhongMaterial 
        color="#00d9ff"
        wireframe={true}
        transparent={true}
        opacity={0.1}
        emissive="#00a8cc"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export function CubeVisualization() {
  return (
    <div className="w-full h-64 md:h-80 bg-gradient-to-b from-slate-900/50 to-slate-950/50 rounded-lg border border-cyan-500/20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00d9ff" intensity={1} />
        <pointLight position={[-10, -10, 10]} color="#0066ff" intensity={0.5} />
        <RotatingCube />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={4}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
