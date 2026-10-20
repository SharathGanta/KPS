import { Brush, Bug, Droplets, Flower2, Hammer, Lightbulb, Shield, Wrench, Wind } from 'lucide-react'

export const services = [
  { title: 'Housekeeping', badge: 'Care', description: 'Daily cleaning for lobbies, corridors, lifts and shared spaces.', icon: Brush, tone: 'blue' },
  { title: 'Security services', badge: 'Guard', description: 'Professional security personnel and vigilant access support.', icon: Shield, tone: 'green' },
  { title: 'Gardening & landscaping', badge: 'Green', description: 'Thoughtful green-space care, trimming and garden upkeep.', icon: Flower2, tone: 'lime' },
  { title: 'Plumbing', badge: 'Flow', description: 'Responsive plumbing support for leaks, fittings and common areas.', icon: Droplets, tone: 'blue' },
  { title: 'Electrical work', badge: 'Power', description: 'Routine checks and repairs for shared electrical systems.', icon: Lightbulb, tone: 'orange' },
  { title: 'General maintenance', badge: 'Fix', description: 'Planned upkeep and minor repairs to keep things working.', icon: Wrench, tone: 'green' },
  { title: 'Pest control', badge: 'Safe', description: 'Scheduled treatments to help maintain hygienic environments.', icon: Bug, tone: 'lime' },
  { title: 'Water tank cleaning', badge: 'Pure', description: 'Periodic tank cleaning and hygiene-focused maintenance.', icon: Wind, tone: 'blue' },
  { title: 'Renovation & repairs', badge: 'Build', description: 'Support for refreshes, painting and small improvement works.', icon: Hammer, tone: 'orange' },
]

export const plans = [
  {
    name: 'Essential', subtitle: 'Reliable everyday essentials', rate: 799, tone: 'essential',
    description: 'For communities looking to cover the day-to-day basics.',
    features: ['Common-area housekeeping', 'Basic gardening upkeep', 'Routine common-area checks', 'Monthly service summary'],
  },
  {
    name: 'Professional', subtitle: 'A balanced, managed solution', rate: 1299, tone: 'professional', featured: true,
    description: 'A stronger all-round package for active residential communities.',
    features: ['Everything in Essential', 'Dedicated maintenance coordination', 'Scheduled pest-control coordination', 'Priority issue tracking', 'Dedicated relationship contact'],
  },
  {
    name: 'Complete 360°', subtitle: 'End-to-end property care', rate: 1899, tone: 'complete',
    description: 'A broader integrated plan with more services coordinated together.',
    features: ['Everything in Professional', 'Integrated service coordination', 'Water tank cleaning schedule', 'Expanded inspection checklist', 'Quarterly review meeting'],
  },
]

export const benefits = [
  { title: 'Trained professionals', description: 'Teams briefed on service standards, safety and respectful site conduct.', icon: 'people' },
  { title: 'Quality assurance', description: 'Clear checklists and regular reviews help keep standards consistent.', icon: 'quality' },
  { title: 'Transparent pricing', description: 'Defined scope, understandable estimates and no avoidable surprises.', icon: 'price' },
  { title: 'Timely delivery', description: 'Planned routines and clear escalation paths for service requests.', icon: 'time' },
  { title: 'Dedicated relationship manager', description: 'A clear point of contact for coordination, feedback and follow-up.', icon: 'manager' },
  { title: 'Flexible service plans', description: 'Packages can be discussed around your property and agreed requirements.', icon: 'flex' },
]
