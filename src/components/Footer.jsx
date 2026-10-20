import { ArrowUpRight, Leaf } from 'lucide-react'

export default function Footer({ companyEmail, companyPhone, location }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a href="#home" className="brand footer-brand"><span className="brand-mark"><span>K</span><i /></span><span className="brand-copy"><strong>KPS <em>ENTERPRISES</em></strong><small>INTEGRATED FACILITY MANAGEMENT</small></span></a>
          <p>Thoughtful, reliable facility management for spaces where people live, work and connect.</p>
          <div className="footer-tagline"><Leaf size={15} /> Better spaces start with better care.</div>
        </div>
        <div className="footer-links"><h4>Explore</h4><a href="#about">About us</a><a href="#services">Our services</a><a href="#packages">Service packages</a><a href="#why-kps">Why KPS</a></div>
        <div className="footer-links"><h4>Our services</h4><a href="#services">Housekeeping</a><a href="#services">Security</a><a href="#services">Maintenance</a><a href="#services">Gardening & more</a></div>
        <div className="footer-links footer-contact"><h4>Get in touch</h4><a href={`tel:${companyPhone.replace(/[^\d+]/g, '')}`}>{companyPhone}</a><a href={`mailto:${companyEmail}`}>{companyEmail}</a><span>{location}</span><a className="footer-cta" href="#contact">Request a quote <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} KPS Enterprises. All rights reserved.</span><span>Built around care. Designed for trust.</span><a href="#home">Back to top ↑</a></div></div>
    </footer>
  )
}
