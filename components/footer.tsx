'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-2 border-accent/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              Aniket Kuntare
            </h3>
            <p className="text-foreground/60 text-sm font-sans">
              Cybersecurity Professional • IT Infrastructure Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-sm font-sans">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm text-foreground/60 font-sans">
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 uppercase tracking-widest text-sm font-sans">
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/aniket-kuntare-/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 font-sans font-bold">
                in
              </a>
              <a href="mailto:aniketkuntare890@gmail.com" className="w-10 h-10 border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 font-sans font-bold">
                @
              </a>
              <a href="tel:+918412987611" className="w-10 h-10 border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 font-sans font-bold">
                ☎
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
       <div className="border-t-2 border-accent/20 pt-8 mt-8">
  <div className="flex justify-center items-center text-sm text-foreground/60 font-sans text-center">
    <p>&copy; {currentYear} Aniket Kuntare. All rights reserved.</p>
  </div>
</div>
      </div>
    </footer>
  )
}
