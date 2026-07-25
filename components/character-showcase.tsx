'use client'

import { useState } from 'react'
import { AvatarCharacter } from './3d-avatar'
import { AnimatedCharacterComponent } from './3d-animated-character'
import { HolographicAvatarComponent } from './3d-holographic-avatar'

export function CharacterShowcase() {
  const [activeCharacter, setActiveCharacter] = useState<'avatar' | 'animated' | 'holographic'>('holographic')

  return (
    <section className="py-20 bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            3D Character
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interact with my 3D avatar representations showcasing cybersecurity expertise with dynamic holographic visualizations
          </p>
        </div>

        {/* Character Display */}
        <div className="mb-8">
          {activeCharacter === 'avatar' && <AvatarCharacter />}
          {activeCharacter === 'animated' && <AnimatedCharacterComponent />}
          {activeCharacter === 'holographic' && <HolographicAvatarComponent />}
        </div>

        {/* Character Selection */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setActiveCharacter('avatar')}
            className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
              activeCharacter === 'avatar'
                ? 'bg-cyan-500 text-black glow'
                : 'border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
            }`}
          >
            Rotating Avatar
          </button>
          <button
            onClick={() => setActiveCharacter('animated')}
            className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
              activeCharacter === 'animated'
                ? 'bg-cyan-500 text-black glow'
                : 'border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
            }`}
          >
            Animated Character
          </button>
          <button
            onClick={() => setActiveCharacter('holographic')}
            className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
              activeCharacter === 'holographic'
                ? 'bg-cyan-500 text-black glow'
                : 'border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10'
            }`}
          >
            Holographic Avatar
          </button>
        </div>

        {/* Character Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Rotating Avatar</h3>
            <p className="text-gray-300 text-sm">
              Classic professional avatar with metallic finish and neon eyes, representing core expertise and professional identity.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Animated Character</h3>
            <p className="text-gray-300 text-sm">
              Dynamic character with idle animations including head movement and arm waving, showcasing an approachable professional demeanor.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
            <h3 className="text-lg font-bold text-cyan-400 mb-2">Holographic Avatar</h3>
            <p className="text-gray-300 text-sm">
              Advanced cybersecurity-themed hologram with orbiting rings, energy spikes, and mouse tracking interaction effects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
