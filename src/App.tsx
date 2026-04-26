import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Shield, Droplets, Building2, Factory, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

// --- Helpers ---

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// --- Components ---

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
      <defs>
        <linearGradient id="logo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <path id="textPath" d="M 15,82 A 35,35 0 0 0 85,82" />
      </defs>
      
      {/* Outer white base */}
      <circle cx="50" cy="50" r="48" fill="white" />
      
      {/* Outer subtle ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#logo-blue-grad)" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* Hand-Drop Container */}
      <g transform="translate(50, 38) scale(0.55) translate(-50, -50)">
        {/* Left Hand / Side of Drop */}
        <path 
          d="M50 10 C35 25 22 45 22 65 C22 80 35 90 50 90 C42 82 32 72 32 60 C32 45 42 30 50 20 Z" 
          fill="url(#logo-blue-grad)"
        />
        {/* Right Hand / Side of Drop */}
        <path 
          d="M50 10 C65 25 78 45 78 65 C78 80 65 90 50 90 C58 82 68 72 68 60 C68 45 58 30 50 20 Z" 
          fill="url(#logo-blue-grad)"
          opacity="0.9"
        />
        {/* Fingers / Layers */}
        <path d="M35 50 Q32 55 32 65 M40 55 Q38 60 38 70" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M65 50 Q68 55 68 65 M60 55 Q62 60 62 70" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Curved Brand Text */}
      <text fill="#1e40af" fontSize="10" fontWeight="900" letterSpacing="0.5" style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' }}>
        <textPath xlinkHref="#textPath" startOffset="50%" textAnchor="middle">
          SANIXPERTS
        </textPath>
      </text>
    </svg>
  </div>
);

const AboutOntario = () => {
  const gallery = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1436060078805-728b9fb688ba?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590611380023-746761595ade?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="about" className="py-32 bg-brand-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 font-display">Service excellence through <br/><span className="text-brand-accent italic">dedication.</span></h2>
          <p className="text-blue-50 text-xl leading-relaxed mb-8 font-light">
            SaniXperts Inc. offers professional sanitation services throughout Hamilton and Southern Ontario. 
            With over 15 years of specialized experience in federal and provincial food plants, 
            we set the standard for high-prestige sanitation.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-white italic text-lg mb-4">
              "We provide excellent services to clients, and we are proud that we have grown fundamentally through referrals."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-brand-accent" />
              <span className="font-bold text-sm tracking-widest uppercase">The SaniXperts Promise</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl overflow-hidden shadow-2xl relative group ${i % 2 === 0 ? 'mt-8' : ''}`}
            >
              <img 
                src={img} 
                alt="Ontario Operations" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SafeEnvironment = () => (
  <section id="safety" className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
      >
        Operational Excellence
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-10 text-slate-900"
      >
        Ensuring a Safe Working <br/>Environment
      </motion.h2>
      <div className="max-w-3xl mx-auto mb-20">
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          We ensure prestige results in our services and adhere to all standards of compliance in exceeding our clients' expectations. 
          We have over 15 years of diverse experience in the industry.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          SaniXperts Inc. has the knowledge and expertise you can rely on for all your sanitation needs. 
          We are ready to battle and disinfect precision-critical environments.
        </p>
      </div>
      
      <div className="relative inline-block">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-brand-primary rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Safety Protocol" 
            className="relative rounded-[4rem] w-full max-w-4xl h-[600px] object-cover shadow-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <Shield className="text-white w-10 h-10" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'COVID-19', href: '#covid' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSmoothScroll(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-3 group transition-transform hover:scale-105"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <BrandLogo className="w-12 h-12" />
          <div className="flex flex-col -gap-1">
            <span className={`text-2xl font-display font-bold tracking-tight leading-tight text-slate-900`}>
              Sani<span className="text-brand-secondary underline decoration-brand-accent/30 underline-offset-4">Xperts</span>
            </span>
            <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-500">Professional Sanitation</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-brand-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-all hover:shadow-lg hover:shadow-brand-secondary/20"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded-lg" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 md:hidden shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-secondary py-2 border-b border-slate-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-semibold text-center mt-2 shadow-lg shadow-brand-primary/20"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "Operations Director, BioTech Systems",
      content: "The level of precision SaniXperts brings to our cleanrooms is unparalleled. Their protocols aren't just cleaning; they're a safeguard for our entire production line.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Chen",
      role: "Quality Assurance, Global Foods Inc",
      content: "SaniXperts transformed our sanitation audit scores. Their team understands the nuance of food safety compliance better than any provider we've ever used.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Miller",
      role: "Logistics Manager, Prime Distribution",
      content: "Reliability in this industry is rare. SaniXperts has been our 24/7 partner for 3 years without a single missed shift or compliance issue. Exceptional service.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-[180px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4">Client Feedback</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display">Trusted by Industry <span className="text-gradient">Leaders.</span></h2>
        </div>

        <div className="relative h-[450px] md:h-[400px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: active === i ? 1 : 0, 
                x: active === i ? 0 : (active < i ? 100 : -100),
                scale: active === i ? 1 : 0.9
              }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none ${active === i ? 'pointer-events-auto' : ''}`}
            >
              <div className="max-w-4xl bg-white/5 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative">
                <svg className="absolute top-8 left-8 w-12 h-12 text-brand-secondary/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
                
                <p className="text-xl md:text-3xl font-light italic leading-relaxed text-slate-200 mb-10 text-center relative z-10">
                  "{t.content}"
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={t.img} 
                    alt={t.name} 
                    className="w-16 h-16 rounded-full border-2 border-brand-secondary p-1" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-brand-secondary font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${active === i ? 'w-12 bg-brand-secondary' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0 scale-110">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618090584176-7132b9911717?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.25] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        
        {/* Animated Light Rays */}
        <div className="absolute top-0 right-0 w-[80%] h-full pointer-events-none opacity-10">
          <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[140%] bg-gradient-to-l from-brand-secondary/30 via-transparent to-transparent rotate-[35deg] blur-[200px] animate-pulse" />
          <div className="absolute top-[-10%] right-[10%] w-[100%] h-[140%] bg-gradient-to-l from-brand-accent/15 via-transparent to-transparent rotate-[45deg] blur-[180px]" />
        </div>

        {/* Floating Particles (Ultra-subtle) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.05, 0],
              y: [0, -100],
              x: [0, Math.random() * 20 - 10]
            }}
            transition={{ 
              duration: 30 + Math.random() * 20, 
              repeat: Infinity,
              delay: Math.random() * 20
            }}
            className="absolute rounded-full bg-white/20 blur-[2px] pointer-events-none"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: 100 + Math.random() * 20 + '%',
              left: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] w-20 bg-brand-secondary shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
            <span className="text-brand-secondary text-sm font-bold uppercase tracking-[0.5em] drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]">
              Excellence Engineered
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-bold text-white leading-[0.85] mb-12"
          >
            Professional <br/>
            <span className="text-gradient">Sanitation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl text-slate-400 mb-16 leading-tight max-w-3xl font-light tracking-tight"
          >
            Top-of-the-line sanitation services specializing in all federal and provincial food plants throughout Hamilton and Southern Ontario.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
          >
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="group relative px-12 py-6 bg-brand-secondary hover:bg-brand-accent transition-all duration-500 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.2)]"
            >
              <div className="relative z-10 flex items-center gap-4 text-white font-bold text-xl">
                Secure Your Facility <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            
            <a 
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="group flex items-center gap-6 px-10 py-6 text-white font-bold text-xl transition-all hover:text-brand-secondary"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-secondary group-hover:border-brand-secondary transition-all duration-500">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent ml-1" />
              </div>
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-center z-10 text-slate-500 text-[0.65rem] font-black uppercase tracking-[0.4em]"
      >
        <div className="flex flex-wrap gap-4 md:gap-12 mb-4 md:mb-0">
          <div className="flex items-center gap-2 shrink-0"><div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" /> ISO 9001:2015</div>
          <div className="flex items-center gap-2 shrink-0"><div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" /> OSHA COMPLIANT</div>
          <div className="flex items-center gap-2 shrink-0"><div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" /> BIO-HAZARD READY</div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="w-12 h-[1px] bg-slate-800" />
          EST. 2011
          <div className="w-12 h-[1px] bg-slate-800" />
        </div>
      </motion.div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    "Expertise in facility maintenance",
    "Superior food safety solutions",
    "Honesty and integrity",
    "Responsibility and accountability",
    "Safety standard compliance",
    "Trained employees",
    "Service excellence through dedication"
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
            alt="Sanitation Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-transparent" />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl" />
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">Why Choose <span className="text-brand-secondary">SaniXperts.</span></h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            SaniXperts Inc. handles sanitation programs through on-site management in which they lead a sanitation team, 
            offer ongoing training, and document checklists for internal, third party, BRC, and USDA (FSA) audits with integrity.
          </p>
          <div className="grid gap-4">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-semibold text-slate-800">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  const techs = [
    {
      title: "Electrostatic Sprayers",
      desc: "Our high-performance sprayer guns wrap around surfaces for 360-degree coverage and complete disinfection.",
      icon: "⚡"
    },
    {
      title: "UV-C Disinfection",
      desc: "We use ultraviolet light to terminate microbial DNA and RNA to achieve a powerful bactericidal effect.",
      icon: "✨"
    },
    {
      title: "OZONE Treatment",
      desc: "Go the extra mile to ensure health and safety using powerful OZONE disinfection for total environment sanitization.",
      icon: "💨"
    }
  ];

  return (
    <section id="technology" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Advanced <span className="text-brand-secondary">Technology.</span></h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Our goals are to be cost-effective, deliver the task on time and to customer satisfaction, 
            as we are willing to ensure client needs are fulfilled to the highest expectations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] relative group overflow-hidden transition-all duration-500"
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{tech.desc}</p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full blur-2xl group-hover:bg-brand-secondary/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CovidSection = () => (
  <section id="covid" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div>
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6 border border-red-100"
        >
          Urgent Update
        </motion.div>
        <h2 className="text-5xl font-bold mb-8">COVID-19 Disinfecting Services</h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            Protect your staff and customers by receiving disinfectant and sanitization cleaning services with SaniXperts Inc.
          </p>
          <p>
            Effective immediately, we are offering enhanced high-risk contaminated surface cleaning and disinfecting. 
            We are ready to battle and disinfect COVID-19 on a per-call basis throughout the Hamilton regional area.
          </p>
          <p className="font-semibold text-slate-900 border-l-4 border-brand-secondary pl-6">
            What this means is, if you are not a current client, but want to do more stringent cleaning, 
            we are available and ready to help.
          </p>
        </div>
      </div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          className="relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1590611380023-746761595ade?auto=format&fit=crop&q=80&w=1200" 
            alt="Disinfection Protocol" 
            className="rounded-[3rem] shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-red-500/5 rounded-full blur-[120px]" />
      </div>
    </div>
  </section>
);

const HealthCanadaSection = () => {
  const products = ["Certified disinfectants", "Certified deodorizers", "Certified sanitizers", "Certified wipes"];
  
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Health Canada <span className="text-brand-secondary">Certified.</span></h2>
            <p className="text-slate-600 max-w-md">We use only the highest quality, government-approved products to ensure safety and effectiveness.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <Shield className="text-brand-secondary" size={20} />
                <span className="font-semibold text-slate-800 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TouchPoints = () => {
  const points = [
    "Computers & Desktops", "Table, Chairs, Phones", "Doors & Doorknobs", 
    "Light Switches", "Cafeteria & Vending", "Conference Rooms", 
    "Garbage Cans & Lids", "Elevator Buttons"
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl font-bold mb-8 font-display">Surgical Cleaning <br/><span className="text-brand-secondary">Touch Points.</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our goals are to be cost effective, deliver the task on time and to customer satisfaction. 
                We target the highest risk contamination vectors in your facility with precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((p, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                    {p}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="flex-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[2.5rem] w-full h-[450px] object-cover shadow-2xl mt-12" 
                  referrerPolicy="no-referrer"
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1436060078805-728b9fb688ba?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-[2.5rem] w-full h-[450px] object-cover shadow-2xl" 
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-secondary/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "Manufacturing", size: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" },
    { name: "Bioscience", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600" },
    { name: "Data Centers", size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600" },
    { name: "Logistics", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1586528116311-ad86d7c717ff?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section id="industries" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Vertical <span className="text-brand-secondary">Specialization.</span></h2>
            <p className="text-slate-600 text-lg">We don't just clean; we engineer environments. Our sector-specific protocols are designed for the unique challenges of high-stakes industries.</p>
          </div>
          <button className="px-8 py-4 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">View All Sectors</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`${ind.size} relative rounded-[2rem] overflow-hidden group cursor-pointer`}
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                <div className="flex items-center gap-2 text-brand-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  Explore Protocols <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      title: "Industrial Plants",
      desc: "Comprehensive sterilization for large-scale manufacturing and processing facilities.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Corporate Hubs",
      desc: "Premium cleaning solutions for office complexes, ensuring healthy workspaces.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Food Safety",
      desc: "Strict adherence to HACCP standards for food and beverage production lines.",
      icon: CheckCircle2,
      image: "https://images.unsplash.com/photo-1590611380053-27c1979d5051?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our specialized teams use advanced equipment and non-toxic bio-solutions 
            to maintain the highest standards of hygiene.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, id) => (
            <motion.div 
              key={id}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(14,165,233,0.12)] transition-all duration-700 group border border-slate-100 hover:border-brand-secondary/20"
            >
              <div className="h-72 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/20 to-transparent" />
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                  className="absolute bottom-6 left-6 text-white bg-brand-secondary p-4 rounded-2xl shadow-lg ring-4 ring-white/20"
                >
                  <item.icon size={28} />
                </motion.div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-secondary transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-brand-secondary font-bold group/btn">
                  <span className="relative">
                    Explore Protocol
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-secondary transition-all duration-300 group-hover/btn:w-full"></span>
                  </span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { val: "15Y+", label: "Industry Experience" },
    { val: "500+", label: "Facilities Maintained" },
    { val: "100%", label: "Compliance Rate" },
    { val: "24/7", label: "Emergency Support" },
  ];

  return (
    <section className="py-20 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="grid grid-cols-6 h-full border-l border-white/20">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/20" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-brand-accent mb-2">{s.val}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <BrandLogo className="w-12 h-12" />
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                  Sani<span className="text-brand-secondary">Xperts</span>
                </span>
                <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-500">Professional Sanitation</span>
              </div>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              Based in Hamilton, Ontario. Specialized sanitation for federal and provincial food plants with 15+ years of experience.
            </p>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all cursor-pointer">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-white">1-888-714-7264</span>
              </div>
              <p>301-1632 Upper James St.<br/>Hamilton, ON L9B 1K4</p>
              <p className="text-brand-secondary">info@sanixperts.ca</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-brand-secondary transition-colors">Industrial Cleaning</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-brand-secondary transition-colors">Office Solutions</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-brand-secondary transition-colors">Food Processing</a></li>
              <li><a href="#safety" onClick={(e) => handleSmoothScroll(e, "#safety")} className="hover:text-brand-secondary transition-colors">Health & Safety</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-brand-secondary transition-colors">Our Story</a></li>
              <li><a href="#technology" onClick={(e) => handleSmoothScroll(e, "#technology")} className="hover:text-brand-secondary transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">© 2026 SaniXperts International. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutOntario />
        <CovidSection />
        <SafeEnvironment />
        <WhyChooseUs />
        <Technology />
        <HealthCanadaSection />
        <Services />
        <Industries />
        <TouchPoints />
        <Testimonials />
        
        {/* Call to Action Section */}
        <section id="contact" className="py-24 relative overflow-hidden bg-brand-surface">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="bg-gradient-to-br from-brand-primary to-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
               
               <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to audit your <br/><span className="text-brand-accent">facility's safety?</span></h2>
               <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
                 Join 500+ industrial giants who trust SaniXperts for their daily 
                 operations. Get a specialized consultation today.
               </p>
               <a 
                 href="#contact"
                 onClick={(e) => handleSmoothScroll(e, "#contact")}
                 className="inline-block bg-white text-brand-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-secondary hover:text-white transition-all transform hover:scale-105 relative z-10"
               >
                 Get Your Free Consultation
               </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
