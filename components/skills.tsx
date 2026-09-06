'use client'

export function Skills() {
  const skillCategories = [
    {
      category: 'Operating Systems & Cloud',
      skills: [
        'Windows 10/11',
        'Windows Server',
        'Linux (RHEL)',
        'Cloud Computing',
        'Microsoft Office 365',
        'OS Installation'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      category: 'Networking',
      skills: [
        'TCP/IP',
        'VLAN',
        'DHCP & DNS',
        'Firewall Configuration',
        'Routing',
        'CCNA',
        'OSI Model'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      category: 'System Administration',
      skills: [
        'Active Directory',
        'Group Policy',
        'User Management',
        'Backup & Restore',
        'System Monitoring',
        'Infrastructure Management'
      ],
      color: 'from-purple-500 to-cyan-500'
    },
    {
      category: 'Cybersecurity',
      skills: [
        'VAPT',
        'Penetration Testing',
        'Ethical Hacking',
        'Web Application Security',
        'Vulnerability Assessment',
        'Security Auditing'
      ],
      color: 'from-red-500 to-cyan-500'
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-background border-t-2 border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="w-12 h-px bg-accent"></span>
            <p className="text-xs uppercase tracking-widest font-sans text-accent">Expertise</p>
            <span className="w-12 h-px bg-accent"></span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground text-center">
            Technical<br />
            <span className="text-accent">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="border-b-2 border-accent/20 pb-8 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary text-foreground text-sm font-sans font-medium border border-accent/30 hover:border-accent hover:bg-secondary/80 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t-2 border-accent/20">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Companies', value: '3' },
            { label: 'Certifications', value: '5' },
            { label: 'Core Skills', value: '20+' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-5xl font-serif font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest font-sans text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
