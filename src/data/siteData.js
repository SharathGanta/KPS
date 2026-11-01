import { ArrowUpDown, Brush, Bug, Building2, Droplets, Flower2, Hammer, Lightbulb, Shield, UserRoundCheck, Wrench, Wind } from 'lucide-react'

export const services = [
  { title: 'Housekeeping', badge: 'Care', description: 'Residential, commercial and institutional cleaning, including deep and periodic cleaning.', icon: Brush, tone: 'blue' },
  { title: 'Security services', badge: 'Guard', description: 'Security guards, main-gate access control, and visitor and vehicle entry management.', icon: Shield, tone: 'green' },
  { title: 'Gardening & landscaping', badge: 'Green', description: 'Garden, lawn and plant care, pruning, trimming and landscaping upkeep.', icon: Flower2, tone: 'lime' },
  { title: 'Technical maintenance', badge: 'Fix', description: 'Routine building maintenance, minor civil repairs and preventive maintenance scheduling.', icon: Wrench, tone: 'green' },
  { title: 'Plumbing', badge: 'Flow', description: 'Plumbing and sanitary maintenance for properties and common areas.', icon: Droplets, tone: 'blue' },
  { title: 'Electrical works', badge: 'Power', description: 'Electrical maintenance and repair coordination.', icon: Lightbulb, tone: 'orange' },
  { title: 'Pest control', badge: 'Safe', description: 'Scheduled pest control to help maintain hygienic environments.', icon: Bug, tone: 'lime' },
  { title: 'Water tank cleaning', badge: 'Pure', description: 'Overhead and underground water-tank cleaning.', icon: Wind, tone: 'blue' },
  { title: 'Renovation & property improvement', badge: 'Build', description: 'Home and commercial renovation, painting, finishing and minor civil modifications.', icon: Hammer, tone: 'orange' },
  { title: 'Personal security & bodyguards', badge: 'Protect', description: 'Personal security guards and bodyguard services.', icon: UserRoundCheck, tone: 'green' },
  { title: 'Lift consultancy', badge: 'Lift', description: 'Lift requirement assessment, AMC vendor coordination and upgrade advisory.', icon: ArrowUpDown, tone: 'blue' },
  { title: 'Integrated facility management', badge: '360°', description: 'Multi-service, vendor and staff coordination under one partner.', icon: Building2, tone: 'lime' },
]

// rateMin / rateMax: indicative price range per flat, per month (for a 100-flat society)
export const plans = [
  {
    name: 'Essential', subtitle: 'For smaller societies', rateMin: 450, rateMax: 650, tone: 'essential',
    description: 'Everyday housekeeping, gardening and maintenance.',
    features: ['Housekeeping', 'Gardening', 'General maintenance'],
  },
  {
    name: 'Professional', subtitle: 'For mid/large societies', rateMin: 900, rateMax: 1300, tone: 'professional', featured: true,
    description: 'Adds security, pest control and tank cleaning.',
    features: ['Everything in Essential', 'Security services', 'Pest control', 'Water tank cleaning'],
  },
  {
    name: 'Complete 360°', subtitle: 'For premium societies', rateMin: 1500, rateMax: 2200, tone: 'complete',
    description: 'Full 360° coverage with technical and renovation support.',
    features: ['Everything in Professional', 'Technical maintenance', 'Plumbing & electrical works', 'Renovation support', 'Preventive maintenance', 'And more…'],
  },
]

export const benefits = [
  { title: 'Single-point coordination', description: 'Multiple facility requirements managed through one service partner.', icon: 'people' },
  { title: 'Customised solutions', description: 'Service plans aligned with property size, operating needs and budget.', icon: 'quality' },
  { title: 'Clear responsibilities', description: 'Agreed scopes, schedules and service expectations.', icon: 'price' },
  { title: 'Operational focus', description: 'Emphasis on cleanliness, maintenance follow-through and reliable coordination.', icon: 'time' },
  { title: 'Flexible engagement', description: 'Support for recurring contracts or individual service requirements.', icon: 'manager' },
  { title: 'Regional reach', description: 'Serving Pune, Pimpri-Chinchwad, Nashik, Mumbai, Thane and Nagpur. Coming to your city soon.', icon: 'flex' },
]

export const cities = ['Pune', 'Pimpri-Chinchwad', 'Nashik', 'Mumbai', 'Thane', 'Nagpur']
