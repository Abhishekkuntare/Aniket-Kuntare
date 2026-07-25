'use client'

export function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'aniketkuntare890@gmail.com',
      icon: '✉️',
      href: 'mailto:aniketkuntare890@gmail.com'
    },
    {
      label: 'Phone',
      value: '+91-8412987611',
      icon: '📱',
      href: 'tel:+918412987611'
    },
    {
      label: 'LinkedIn',
      value: 'View Profile',
      icon: '🔗',
      href: '#'
    },
    {
      label: 'Location',
      value: 'Amravati, Maharashtra, India',
      icon: '📍',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background border-t-2 border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 justify-center mb-8">
              <span className="w-12 h-px bg-accent"></span>
              <p className="text-xs uppercase tracking-widest font-sans text-accent">Get In Touch</p>
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground text-center">
              Let&apos;s<br />
              <span className="text-accent">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {contactInfo.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="group border border-accent/30 p-8 hover:border-accent transition-all duration-300 bg-secondary/30"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl flex-shrink-0">{contact.icon}</div>
                  <div>
                    <p className="text-accent text-xs uppercase tracking-widest font-sans mb-2">
                      {contact.label}
                    </p>
                    <p className="text-foreground font-serif font-bold text-lg group-hover:text-accent transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="border-2 border-accent p-12 md:p-16 text-center bg-secondary/50">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Interested in working<br />together?
            </h3>
            <p className="text-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-sans">
              I&apos;m open to cybersecurity consulting, penetration testing engagements, and IT infrastructure projects. Let&apos;s create something secure together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:aniketkuntare890@gmail.com"
                className="inline-block px-12 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-all border border-accent"
              >
                Send Email
              </a>
              <a 
                href="/AniketKuntareResume.pdf"
                download="AniketKuntareResume.pdf"
                className="inline-block px-12 py-4 border-2 border-accent text-accent font-semibold uppercase tracking-widest text-sm hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
