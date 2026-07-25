'use client'

import { ScrollFade } from './scroll-fade'

export function Experience() {
  const experiences = [
    {
      title: 'System Support Engineer',
      company: 'Star Next Innovations Pvt. Ltd.',
      period: 'July 2024 – Present',
      icon: '🖥️',
      highlights: [
        'Managed Windows systems and user accounts',
        'Installed and configured operating systems',
        'Resolved hardware and software issues',
        'Provided remote desktop support'
      ]
    },
    {
      title: 'Desktop Support Engineer',
      company: 'Impact InfoTech Pvt. Ltd.',
      period: 'March 2024 – Aug 2024',
      icon: '⚙️',
      highlights: [
        'Configured Windows and Microsoft Office environments',
        'Diagnosed and resolved system issues',
        'Maintained printer and network connectivity',
        'Provided technical support to end users'
      ]
    },
    {
      title: 'IT Support Engineer',
      company: 'Welt Infoline',
      period: 'Feb 2023 – Feb 2024',
      icon: '🔧',
      highlights: [
        'Administered Windows Server and Active Directory',
        'Managed DNS and DHCP services',
        'Resolved network and system issues',
        'Maintained reliable system performance'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-background border-t-2 border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="w-12 h-px bg-accent"></span>
            <p className="text-xs uppercase tracking-widest font-sans text-accent">Experience</p>
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground text-center">
            Professional<br />
            <span className="text-accent">Journey</span>
          </h2>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <ScrollFade key={idx} direction="up" delay={idx * 0.2}>
              <div
                className="group border-b-2 border-accent/20 pb-12 hover:border-accent/50 transition-all duration-300"
              >
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">{exp.icon}</div>
                
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-sm uppercase tracking-widest font-sans text-foreground/60">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-accent font-semibold mb-6 uppercase tracking-wide text-sm font-sans">
                    {exp.company}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-foreground/80 flex gap-3 font-sans">
                        <span className="text-accent flex-shrink-0 font-bold">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
