import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className={`service-icon tone-${service.tone}`}><Icon size={23} strokeWidth={1.8} /></div>
        <span className="service-badge">{service.badge}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href="#contact" aria-label={`Enquire about ${service.title}`} className="service-link"><ArrowUpRight size={17} /></a>
    </article>
  )
}
