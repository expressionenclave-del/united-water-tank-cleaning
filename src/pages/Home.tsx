import { Link } from 'react-router-dom'
import { Sparkles, Building2, CalendarCheck, HeartHandshake, ShieldCheck, Droplets, Home as HomeIcon } from 'lucide-react'
import { Page, BookButton, WhatsAppButton } from '../components/Layout'
import { Wrap, Title, ServicesGrid, ProcessList, FAQList, CTA } from '../components/Sections'

const highlights = [
  [Sparkles, 'Professional Cleaning Approach'],
  [Building2, 'Residential and Commercial Services'],
  [CalendarCheck, 'Convenient Appointment Arrangements'],
  [HeartHandshake, 'Customer-Focused Service'],
  [ShieldCheck, 'Careful Handling of Property'],
  [Droplets, 'Attention to Water Tank Hygiene'],
] as const

const serve = ['Homes', 'Apartments', 'Residential Buildings', 'Offices', 'Shops', 'Commercial Buildings', 'Other Suitable Facilities']
const why = [
  ['Attention to cleanliness', 'We focus on removing accumulated dirt, sediment and debris from your tank.'],
  ['Clear communication', 'We explain the service, so you know what to expect before work begins.'],
  ['Careful handling of property', 'We respect your home or premises while we work.'],
  ['Convenient scheduling', 'Appointments are arranged around your time.'],
  ['Recommendations based on tank condition', 'Our suggestions depend on what your tank actually needs.'],
  ['Residential and commercial needs', 'We consider the requirements of both households and businesses.'],
]

export default function Home() {
  return (
    <Page
      title="Professional Water Tank Cleaning Service | United Water Tank Cleaning Service"
      description="Professional water tank cleaning for residential and commercial needs. Book a service by phone, WhatsApp or email."
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-aqua-700 py-20 sm:py-28">
        <Droplets aria-hidden="true" className="absolute -right-10 -top-10 h-96 w-96 text-white/5" />
        <Wrap cls="relative">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight !text-white sm:text-6xl">
            Professional Water Tank Cleaning for a Cleaner, Healthier Home
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Maintain cleaner water storage with professional tank cleaning services tailored to residential and commercial needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton />
            <WhatsAppButton text="Chat on WhatsApp" />
          </div>
        </Wrap>
      </section>

      <section className="py-16">
        <Wrap>
          <Title kicker="Our Approach" title="Care You Can Count On" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-aqua-400"><Icon aria-hidden="true" /></span>
                <span className="font-semibold text-navy-900">{label}</span>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-slate-50 py-16">
        <Wrap cls="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-aqua-600">About Us</p>
            <h2 className="text-3xl font-bold">Committed to Cleaner, Better-Maintained Water Tanks</h2>
            <p className="mt-4">
              United Water Tank Cleaning Service helps households and businesses maintain their water storage tanks. We believe in clear communication, responsible work practices and respect for your time and property.
            </p>
            <Link to="/about-us" className="mt-6 inline-flex rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-700">Learn More About Us</Link>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-aqua-600 p-10 text-white">
            <Droplets className="mb-3 h-10 w-10 text-aqua-400" aria-hidden="true" />
            <p className="text-xl font-semibold">Tank cleaning designed around your tank type, its condition and your requirements.</p>
          </div>
        </Wrap>
      </section>

      <section className="py-16">
        <Wrap>
          <Title kicker="Services" title="Water Tank Cleaning Services" text="Tell us about your tank and we will guide you on the right service." />
          <ServicesGrid />
        </Wrap>
      </section>

      <section className="bg-slate-50 py-16">
        <Wrap>
          <Title kicker="Why Choose Us" title="A Service Built on Care and Clear Communication" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-16">
        <Wrap>
          <Title kicker="Our Process" title="How Tank Cleaning Works" text="The exact process depends on the tank type, its condition and the agreed service." />
          <ProcessList />
        </Wrap>
      </section>

      <section className="bg-slate-50 py-16">
        <Wrap>
          <Title kicker="Who We Serve" title="Homes, Businesses and More" />
          <div className="flex flex-wrap justify-center gap-3">
            {serve.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 rounded-full border border-aqua-500/40 bg-white px-5 py-2 font-medium text-navy-900">
                <HomeIcon size={16} className="text-aqua-600" aria-hidden="true" /> {s}
              </span>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-16">
        <Wrap cls="max-w-3xl">
          <Title kicker="Hygiene Awareness" title="Why Water Tanks Need Regular Maintenance" />
          <p>
            Water storage tanks can collect dirt, sediment and residue over time, and microbial contamination may develop. These factors may affect the quality of stored water. Regular cleaning is an important part of tank maintenance, but cleaning alone cannot guarantee that water is safe to drink. If you have concerns about drinking-water quality, consider appropriate water testing or advice from a qualified professional.
          </p>
        </Wrap>
      </section>

      <section className="bg-slate-50 py-16">
        <Wrap>
          <Title kicker="Our Commitments" title="What You Can Expect From Us" />
          <div className="grid gap-5 sm:grid-cols-3">
            {['Clear communication before and during the service', 'Respect for your property and time', 'Advice based on your tank and requirements'].map((t) => (
              <p key={t} className="rounded-2xl bg-white p-6 text-center font-semibold text-navy-900 shadow-sm">{t}</p>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-16">
        <Wrap>
          <Title kicker="FAQs" title="Frequently Asked Questions" />
          <FAQList />
        </Wrap>
      </section>
      <CTA />
    </Page>
  )
}
