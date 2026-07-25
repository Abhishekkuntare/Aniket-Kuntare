'use client'

import { useState } from 'react'

export function Certifications() {
  const certifications = [
    {
      name: 'ISO/ISC 27001 Information Security Associate',
      issuer: 'International Organization for Standardization',
      icon: '🔐',
      status: 'Certified'
    },
    {
      name: 'Internshala Ethical Hacking',
      issuer: 'Internshala',
      icon: '🎓',
      status: 'Completed'
    },
    {
      name: 'NASSCOM Junior Software Developer (Gold)',
      issuer: 'NASSCOM',
      icon: '⭐',
      status: 'Certified'
    },
    {
      name: 'Virtually Testing Foundation',
      issuer: 'Los Angeles, CA, USA',
      icon: '🧪',
      status: 'Certified'
    },
    {
      name: 'Risewell Cyber Security Solutions',
      issuer: 'Nagpur',
      icon: '🛡️',
      status: 'Certified'
    }
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background border-t-2 border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="w-12 h-px bg-accent"></span>
            <p className="text-xs uppercase tracking-widest font-sans text-accent">Achievements</p>
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground text-center">
            Certifications &<br />
            <span className="text-accent">Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="border border-accent/30 p-6 hover:border-accent transition-all duration-300 bg-secondary/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-accent text-sm mb-4 font-sans">
                    {cert.issuer}
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wide border border-accent/50">
                    {cert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section */}
        <div className="pt-16 border-t-2 border-accent/20">
         <h3 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-16 text-center mx-auto">
  Education &<br />
  <span className="text-accent">Training</span>
</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="border border-accent/30 p-8 hover:border-accent transition-all duration-300 bg-secondary/30">
              <h4 className="text-2xl font-serif font-bold text-foreground mb-2">
                Bachelor of Vocation
              </h4>
              <p className="text-accent font-semibold text-sm mb-8 uppercase tracking-widest font-sans">
                Cyber Security
              </p>
              <div className="space-y-3 text-foreground/80 text-sm font-sans">
                <p><span className="font-semibold text-foreground">University:</span> Sant Gadge Baba Amravati University</p>
                <p><span className="font-semibold text-foreground">Location:</span> Amravati, Maharashtra</p>
                <p><span className="font-semibold text-foreground">CGPA:</span> 9.20</p>
              </div>
            </div>

            <div className="border border-accent/30 p-8 hover:border-accent transition-all duration-300 bg-secondary/30">
              <h4 className="text-2xl font-serif font-bold text-foreground mb-2">
                Diploma in Cloud Computing
              </h4>
              <p className="text-accent font-semibold text-sm mb-8 uppercase tracking-widest font-sans">
                Advanced Infrastructure
              </p>
              <div className="space-y-3 text-foreground/80 text-sm font-sans">
                <p><span className="font-semibold text-foreground">Institution:</span> Jetking, Nagpur</p>
                <p><span className="font-semibold text-foreground">Focus:</span> Windows Server, Active Directory, Networking</p>
                <p><span className="font-semibold text-foreground">Format:</span> Hands-on practical training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
