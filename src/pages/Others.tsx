import { Link } from 'react-router-dom'
import { Page, BookButton, WhatsAppButton, CallButton } from '../components/Layout'
import { Wrap, Title, PageHero, ServicesGrid, ProcessList, FAQList, CTA } from '../components/Sections'
import { business as b } from '../config'

const aboutBlocks = [
  ['Who We Are', 'United Water Tank Cleaning Service is committed to helping households and businesses maintain cleaner, better-maintained water storage tanks. We understand that water storage systems need proper attention, and that accumulated dirt, sediment and residue can affect the cleanliness of stored water.'],
  ['Our Mission', 'To provide a dependable, customer-focused tank cleaning service for residential and commercial requirements, by understanding each customer\u2019s needs, following an appropriate cleaning procedure and treating every property with care.'],
  ['Our Vision', 'To make professional water tank maintenance more convenient and accessible for the households and businesses we serve.'],
  ['Our Service Commitment', 'Good service begins with clear communication, responsible work practices and respect for your time and property. We want every customer to understand the service being provided and feel confident when arranging an appointment.'],
  ['Our Approach to Cleanliness and Hygiene', 'Our services are designed around the tank type, its condition and the cleaning requirements discussed with you. We focus on removing accumulated dirt, sediment and debris, and on disinfection where applicable.'],
  ['Residential and Commercial Tank Cleaning', 'From underground reservoirs to overhead and plastic water tanks, and from a household tank to a larger building\u2019s storage system, we welcome the opportunity to discuss your requirements.'],
  ['Why Proper Tank Maintenance Matters', 'Stored water can be affected by dirt, sediment and microbial contamination over time. Regular maintenance helps keep your storage cleaner, although cleaning alone cannot guarantee drinking-water safety.'],
]

export function About() {
  return (
    <Page title="About Us | United Water Tank Cleaning Service" description="Learn about United Water Tank Cleaning Service, our mission, our commitment to cleanliness and our customer-focused approach.">
      <PageHero title="About United Water Tank Cleaning Service" text="A customer-focused approach to water tank maintenance for homes and businesses." />
      <section className="py-16">
        <Wrap cls="grid gap-6 md:grid-cols-2">
          {aboutBlocks.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{t}</h2>
              <p className="mt-3 text-slate-600">{d}</p>
            </div>
          ))}
        </Wrap>
      </section>
      <CTA />
    </Page>
  )
}

export function ServicesPage() {
  return (
    <Page title="Water Tank Cleaning Services | United Water Tank Cleaning Service" description="Underground, overhead, residential, commercial, apartment and plastic water tank cleaning, plus sludge removal.">
      <PageHero title="Our Services" text="Water tank cleaning for homes, buildings and businesses. Please confirm availability of any service when you enquire." />
      <section className="py-16"><Wrap><ServicesGrid /></Wrap></section>
      <CTA />
    </Page>
  )
}

export function ProcessPage() {
  return (
    <Page title="Our Cleaning Process | United Water Tank Cleaning Service" description="Understand the general steps in professional water tank cleaning, from enquiry to final inspection.">
      <PageHero title="Our Cleaning Process" text="The actual process depends on the tank type, its condition and the agreed scope of work." />
      <section className="py-16"><Wrap><ProcessList /></Wrap></section>
      <CTA />
    </Page>
  )
}

export function Areas() {
  return (
    <Page title="Areas We Serve | United Water Tank Cleaning Service" description="Contact United Water Tank Cleaning Service to confirm service availability in your area.">
      <PageHero title="Areas We Serve" text="Tell us your location and we will confirm availability." />
      <section className="py-16">
        <Wrap cls="max-w-3xl text-center">
          {b.areas.length === 0 ? (
            <p className="text-lg">To confirm whether we can serve your area, please contact us by phone, WhatsApp or email with your location.</p>
          ) : (
            <ul className="flex flex-wrap justify-center gap-3">
              {b.areas.map((a) => <li key={a} className="rounded-full bg-aqua-500/15 px-5 py-2 font-medium text-navy-900">{a}</li>)}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton /><WhatsAppButton />
          </div>
        </Wrap>
      </section>
    </Page>
  )
}

export function FAQPage() {
  return (
    <Page title="Frequently Asked Questions | United Water Tank Cleaning Service" description="Answers to common questions about water tank cleaning, quotations, appointments and contacting us.">
      <PageHero title="Frequently Asked Questions" text="Quick answers about our water tank cleaning service." />
      <section className="py-16"><Wrap><FAQList /></Wrap></section>
      <CTA />
    </Page>
  )
}

export function Privacy() {
  return (
    <Page title="Privacy Policy | United Water Tank Cleaning Service" description="How United Water Tank Cleaning Service handles the information you share with us.">
      <PageHero title="Privacy Policy" text="How we handle the information you share with us." />
      <section className="py-16">
        <Wrap cls="max-w-3xl space-y-4">
          <p>This website does not store your enquiry details on its own server. When you use the contact form, your details are placed into a WhatsApp message that you choose to send to us.</p>
          <p>We use the information you share, such as your name, phone number, area and tank details, only to respond to your enquiry and arrange the requested service.</p>
          <p>When you call, message or email us, your communication is handled through those services under their own policies.</p>
          <p>For questions about your information, email <a className="font-semibold text-aqua-700 underline" href={b.mailto}>{b.email}</a>.</p>
          <p className="text-sm text-slate-500">This is a general policy. Please review it and adjust it to match your actual practices.</p>
        </Wrap>
      </section>
    </Page>
  )
}

export function NotFound() {
  return (
    <Page canonical={false} title="Page Not Found | United Water Tank Cleaning Service" description="The page you are looking for could not be found.">
      <section className="py-24 text-center">
        <Wrap>
          <p className="text-6xl font-bold text-aqua-600">404</p>
          <h1 className="mt-3 text-3xl font-bold">Page Not Found</h1>
          <p className="mt-3">The page you are looking for does not exist or has moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-700">Back to Home</Link>
            <BookButton />
          </div>
        </Wrap>
      </section>
    </Page>
  )
}
