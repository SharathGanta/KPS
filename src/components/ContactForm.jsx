import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react'

const initialForm = { name: '', phone: '', email: '', propertyType: 'Residential society', flats: '', plan: 'Professional', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ''))) errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (form.flats && (!/^\d+$/.test(form.flats) || Number(form.flats) < 1)) errors.flats = 'Enter a valid number of flats.'
  return errors
}

export default function ContactForm({ selectedPlan, onPlanChange, onSubmit }) {
  const [form, setForm] = useState({ ...initialForm, plan: selectedPlan || 'Professional' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    if (selectedPlan && selectedPlan !== form.plan) setForm((current) => ({ ...current, plan: selectedPlan }))
  }, [selectedPlan])

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (name === 'plan') onPlanChange(value)
  }

  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      setStatusMessage('Please review the highlighted fields.')
      return
    }
    setStatus('sending')
    setStatusMessage('')
    try {
      const result = await onSubmit(form)
      setStatus(result.demo ? 'demo' : 'success')
      setStatusMessage(result.message)
      if (!result.demo) setForm({ ...initialForm, plan: form.plan })
    } catch (error) {
      setStatus('error')
      setStatusMessage(error.message || 'We could not send your enquiry. Please try again or contact us directly.')
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-heading"><span className="form-kicker">START A CONVERSATION</span><h3>Request a callback</h3><p>Share a few details and we'll help you plan the next step.</p></div>
      {statusMessage && <div className={`form-alert ${status === 'error' ? 'alert-error' : 'alert-success'}`} role="status">{status === 'success' ? <CheckCircle2 size={18} /> : null}{statusMessage}</div>}
      <div className="form-row">
        <div className="field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" value={form.name} onChange={update} placeholder="Enter your full name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <small className="field-error" id="name-error">{errors.name}</small>}</div>
        <div className="field"><label htmlFor="phone">Mobile number <span>*</span></label><input id="phone" name="phone" inputMode="tel" value={form.phone} onChange={update} placeholder="10-digit mobile number" autoComplete="tel" maxLength={14} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />{errors.phone && <small className="field-error" id="phone-error">{errors.phone}</small>}</div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <small className="field-error" id="email-error">{errors.email}</small>}</div>
        <div className="field"><label htmlFor="propertyType">Property type</label><div className="select-wrap"><select id="propertyType" name="propertyType" value={form.propertyType} onChange={update}><option>Residential society</option><option>Commercial office</option><option>Retail / mixed-use</option><option>Other</option></select><ChevronDownIcon /></div></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="flats">Number of flats / units</label><input id="flats" name="flats" inputMode="numeric" value={form.flats} onChange={update} placeholder="e.g. 100" aria-invalid={!!errors.flats} aria-describedby={errors.flats ? 'flats-error' : undefined} />{errors.flats && <small className="field-error" id="flats-error">{errors.flats}</small>}</div>
        <div className="field"><label htmlFor="plan">Interested package</label><div className="select-wrap"><select id="plan" name="plan" value={form.plan} onChange={update}><option>Essential</option><option>Professional</option><option>Complete 360°</option><option>Custom scope</option></select><ChevronDownIcon /></div></div>
      </div>
      <div className="field"><label htmlFor="message">How can we help? <span className="optional">(optional)</span></label><textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell us about your property or service requirements..." rows="3" /></div>
      <button className="button button-green form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? <><LoaderCircle className="spin" size={17} /> Sending...</> : <>Send enquiry <ArrowRight size={17} /></>}</button>
      <p className="form-privacy">By submitting, you agree that KPS Enterprises may contact you about this enquiry.</p>
    </form>
  )
}

function ChevronDownIcon() {
  return <span className="select-chevron" aria-hidden="true"><ChevronDownIconSvg /></span>
}
function ChevronDownIconSvg() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
}
