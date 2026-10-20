export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`}>
      <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
