'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NetworkVisualization() {
  const lineRef = useRef<THREE.LineSegments>(null)
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(300) // 100 points * 3 coords
    const colors = new Float32Array(300) // 100 points * 3 color channels

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20

      colors[i] = Math.random() * 0.3 + 0.7 // Red
      colors[i + 1] = 1 // Green (Cyan)
      colors[i + 2] = 1 // Blue (Cyan)
    }

    return { positions, colors }
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0002
      pointsRef.current.rotation.y += 0.0003
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.3} vertexColors sizeAttenuation />
      </points>
    </group>
  )
}

export function NetworkVisualization3D() {
  return (
    <div className="w-full h-64 md:h-80 bg-gradient-to-b from-slate-950/50 to-slate-900/50 rounded-lg border border-cyan-500/20 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 10]} color="#00d9ff" intensity={0.8} />
        <NetworkVisualization />
      </Canvas>
    </div>
  )
}
