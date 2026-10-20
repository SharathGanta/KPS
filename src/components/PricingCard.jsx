import { ArrowRight, Check } from 'lucide-react'

export default function PricingCard({ plan, onChoose }) {
  return (
    <article className={`pricing-card ${plan.tone}${plan.featured ? ' featured' : ''}`}>
      {plan.featured && <div className="popular-ribbon">MOST POPULAR</div>}
      <div className="plan-heading"><span className="plan-subtitle">{plan.subtitle}</span><h3>{plan.name}</h3></div>
      <p className="plan-description">{plan.description}</p>
      <div className="plan-price"><span className="currency">₹</span><strong>{plan.rate.toLocaleString('en-IN')}</strong><span className="per-flat">/ flat / month</span></div>
      <div className="plan-rule" />
      <span className="features-label">WHAT'S INCLUDED</span>
      <ul className="plan-features">{plan.features.map((feature) => <li key={feature}><span className="feature-check"><Check size={13} /></span>{feature}</li>)}</ul>
      <button className={plan.featured ? 'button button-primary plan-button' : 'button button-outline plan-button'} onClick={onChoose}>Choose {plan.name} <ArrowRight size={16} /></button>
    </article>
  )
}
