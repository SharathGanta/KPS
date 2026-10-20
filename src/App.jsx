import { useState } from 'react'
import { ArrowRight, Check, CircleCheck, Clock3, Leaf, Menu, ShieldCheck, Sparkles, Users, X } from 'lucide-react'
import { services, plans, benefits } from './data/siteData.js'
import { contactService } from './services/contactService.js'
import SectionHeading from './components/SectionHeading.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import PricingCard from './components/PricingCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

const companyPhone = import.meta.env.VITE_COMPANY_PHONE || '+91 00000 00000'
const companyEmail = import.meta.env.VITE_COMPANY_EMAIL || 'hello@kpsenterprises.example'
const location = import.meta.env.VITE_SERVICE_LOCATION || 'Pune, Maharashtra'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('Professional')

  const closeMenu = () => setMenuOpen(false)
  const scrollToContact = (plan) => {
    if (plan) setSelectedPlan(plan)
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Integrated Facility Management, made simple.</span>
          <div className="topbar-contact"><span>{location}</span><span className="topbar-dot">•</span><a href={`mailto:${companyEmail}`}>{companyEmail}</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="KPS Enterprises home" onClick={closeMenu}>
            <span className="brand-mark"><span>K</span><i /></span>
            <span className="brand-copy"><strong>KPS <em>ENTERPRISES</em></strong><small>INTEGRATED FACILITY MANAGEMENT</small></span>
          </a>
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#services" onClick={closeMenu}>Our services</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href="#why-kps" onClick={closeMenu}>Why KPS</a>
            <button className="button button-primary nav-cta" onClick={() => scrollToContact()}>Get a free quote <ArrowRight size={16} /></button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR SPACE. OUR RESPONSIBILITY.</div>
              <h1>Better spaces.<br /><span>Better living.</span></h1>
              <p className="hero-lede">Complete facility management for communities that deserve cleaner, safer and smarter living.</p>
              <div className="hero-actions">
                <button className="button button-green" onClick={() => scrollToContact()}>Request a free consultation <ArrowRight size={17} /></button>
                <a className="text-link text-link-light" href="#services">Explore our services <span>↘</span></a>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={20} /></div>
                <div><strong>One trusted partner</strong><span>From daily upkeep to long-term care</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85" alt="Luxury residential property exterior with landscaped surroundings" />
                <div className="image-shade" />
                <div className="image-caption"><span className="caption-icon"><Leaf size={18} /></span><div><strong>Care you can see.</strong><small>Quality in every detail.</small></div></div>
              </div>
              <div className="floating-card"><div className="floating-check"><CircleCheck size={22} /></div><div><strong>Complete care</strong><span>All services, one team</span></div></div>
              <div className="hero-stamp"><span>TRUST</span><span className="stamp-dot">•</span><span>CARE</span><span className="stamp-dot">•</span><span>QUALITY</span></div>
            </div>
          </div>
          <div className="hero-bottom-wave" />
        </section>

        <section className="trust-strip" aria-label="KPS service principles">
          <div className="container trust-items">
            <div><ShieldCheck /><span>Safety-first approach</span></div><div><Users /><span>Trained professionals</span></div><div><Clock3 /><span>Reliable service</span></div><div><Sparkles /><span>Quality you can trust</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <img className="about-image-main" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85" alt="Professional facility services team maintaining a modern property" loading="lazy" />
              <div className="about-image-accent" />
              <div className="about-note"><span className="note-icon"><Check size={19} /></span><div><strong>Thoughtfully managed</strong><small>Every space. Every day.</small></div></div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="WHO WE ARE" title={<>A better way to<br /><span>manage your space.</span></>} />
              <p className="body-copy">KPS Enterprises brings essential facility services together under one dependable partner. We help residential societies and commercial properties run smoothly through consistent care, clear communication and accountable service.</p>
              <p className="body-copy">From spotless common areas to dependable maintenance, our approach is built around the people who use your spaces every day.</p>
              <div className="about-points"><div><span className="check-bullet"><Check size={14} /></span> A single point of contact</div><div><span className="check-bullet"><Check size={14} /></span> Service plans to fit your property</div><div><span className="check-bullet"><Check size={14} /></span> Transparent scope and reporting</div></div>
              <a href="#why-kps" className="text-link">Discover the KPS difference <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading eyebrow="WHAT WE DO" title={<>Everything your property needs.<br /><span>All under one roof.</span></>} centered description="Integrated services designed to protect your property, support residents and keep every corner running at its best." />
            <div className="services-grid">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
            <div className="services-bottom"><span>Need a service tailored to your property?</span><button className="button button-outline" onClick={() => scrollToContact()}>Talk to our team <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section className="section packages-section" id="packages">
          <div className="container">
            <SectionHeading eyebrow="SIMPLE, TRANSPARENT PLANS" title={<>The right level of care.<br /><span>One clear monthly price.</span></>} centered description="Choose a package that suits your society. Final pricing is confirmed after a site assessment and scope review." />
            <div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.name} plan={plan} onChoose={() => scrollToContact(plan.name)} />)}</div>
            <div className="pricing-note"><span className="note-info">i</span><p>Illustrative starting rates per flat, per month. Actual quote may vary by location, number of flats, staffing, service frequency and agreed scope.</p></div>
            <div className="society-example">
              <div className="society-icon"><Users size={25} /></div>
              <div className="society-copy"><span className="mini-eyebrow">QUICK EXAMPLE</span><strong>Planning for a 100-flat society?</strong><p>Use the estimates below to start a budget conversation. These are indicative only, not a binding quote.</p></div>
              <div className="society-rates">{plans.map((plan) => <button key={plan.name} className={selectedPlan === plan.name ? 'society-rate active' : 'society-rate'} onClick={() => setSelectedPlan(plan.name)}><span>{plan.name}</span><strong>₹{(plan.rate * 100).toLocaleString('en-IN')}<small>/mo</small></strong></button>)}</div>
            </div>
          </div>
        </section>

        <section className="section why-section" id="why-kps">
          <div className="container why-grid">
            <div className="why-copy">
              <SectionHeading eyebrow="THE KPS PROMISE" title={<>More than a service.<br /><span>A partner you can count on.</span></>} />
              <p className="body-copy">Good facility management is proactive, visible and accountable. We bring structure to the everyday work that keeps a property at its best.</p>
              <button className="button button-primary" onClick={() => scrollToContact()}>Let's talk about your property <ArrowRight size={16} /></button>
            </div>
            <div className="benefits-grid">{benefits.map((benefit) => <div className="benefit-card" key={benefit.title}><div className="benefit-icon">{benefit.icon === 'people' ? <Users size={18} /> : benefit.icon === 'quality' ? <ShieldCheck size={18} /> : benefit.icon === 'price' ? <CircleCheck size={18} /> : benefit.icon === 'time' ? <Clock3 size={18} /> : benefit.icon === 'manager' ? <Users size={18} /> : <Sparkles size={18} />}</div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET'S MAKE IT EASIER</div>
              <h2>Let's take care<br />of your <span>space.</span></h2>
              <p>Tell us a little about your property. Our team can help you explore the right service scope and package.</p>
              <div className="contact-details">
                <a href={`tel:${companyPhone.replace(/[^\d+]/g, '')}`}><span className="contact-detail-icon">☎</span><span><small>Call us</small><strong>{companyPhone}</strong></span></a>
                <a href={`mailto:${companyEmail}`}><span className="contact-detail-icon">✉</span><span><small>Email us</small><strong>{companyEmail}</strong></span></a>
                <div><span className="contact-detail-icon">⌖</span><span><small>Service location</small><strong>{location}</strong></span></div>
              </div>
              <div className="contact-assurance"><ShieldCheck size={18} /><span>Your details are used only to respond to your enquiry.</span></div>
            </div>
            <ContactForm selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} onSubmit={contactService} />
          </div>
        </section>
      </main>
      <Footer companyEmail={companyEmail} companyPhone={companyPhone} location={location} />
    </>
  )
}

export default App
