import { useState, FormEvent } from 'react'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Page } from '../components/Layout'
import { Wrap, PageHero } from '../components/Sections'
import { business as b, services, waLink } from '../config'

type Fields = { name: string; phone: string; service: string; tank: string; area: string; message: string }
const empty: Fields = { name: '', phone: '', service: '', tank: '', area: '', message: '' }
const input = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/40'

export default function Contact() {
  const [f, setF] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [sent, setSent] = useState(false)
  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: Partial<Fields> = {}
    if (f.name.trim().length < 2) er.name = 'Please enter your full name.'
    if (!/^[+\d][\d\s-]{8,14}$/.test(f.phone.trim())) er.phone = 'Please enter a valid phone number.'
    if (!f.service) er.service = 'Please choose a service.'
    if (!f.area.trim()) er.area = 'Please enter your area or location.'
    setErrors(er)
    if (Object.keys(er).length) return
    const msg = `Hello United Water Tank Cleaning Service,\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nTank type: ${f.tank || 'Not specified'}\nArea: ${f.area}\nMessage: ${f.message || '-'}`
    window.open(waLink(msg), '_blank', 'noopener')
    setSent(true)
  }

  const err = (k: keyof Fields) => errors[k] && <p role="alert" className="mt-1 text-sm text-red-600">{errors[k]}</p>

  return (
    <Page title="Contact Us | United Water Tank Cleaning Service" description="Call, WhatsApp or email United Water Tank Cleaning Service to request a water tank cleaning appointment.">
      <PageHero title="Contact Us" text="Reach out to discuss your water tank cleaning requirements." />
      <section className="py-16">
        <Wrap cls="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{b.name}</h2>
            <a className="flex items-center gap-3 font-medium hover:text-aqua-700" href={b.tel}><Phone aria-hidden="true" /> {b.phone}</a>
            <a className="flex items-center gap-3 font-medium hover:text-aqua-700" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp: {b.phone}</a>
            <a className="flex items-center gap-3 break-all font-medium hover:text-aqua-700" href={b.mailto}><Mail aria-hidden="true" /> {b.email}</a>
            <a className="flex items-center gap-3 font-medium hover:text-aqua-700" href={b.map} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /> View Our Location</a>
          </div>

          <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="font-medium">Full Name</label>
              <input id="name" className={input} value={f.name} onChange={set('name')} autoComplete="name" />
              {err('name')}
            </div>
            <div>
              <label htmlFor="phone" className="font-medium">Phone Number</label>
              <input id="phone" type="tel" className={input} value={f.phone} onChange={set('phone')} autoComplete="tel" />
              {err('phone')}
            </div>
            <div>
              <label htmlFor="service" className="font-medium">Service Required</label>
              <select id="service" className={input} value={f.service} onChange={set('service')}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
              {err('service')}
            </div>
            <div>
              <label htmlFor="tank" className="font-medium">Tank Type</label>
              <select id="tank" className={input} value={f.tank} onChange={set('tank')}>
                <option value="">Not sure / Other</option>
                <option>Underground</option><option>Overhead</option><option>Plastic</option>
              </select>
            </div>
            <div>
              <label htmlFor="area" className="font-medium">Area / Location</label>
              <input id="area" className={input} value={f.area} onChange={set('area')} />
              {err('area')}
            </div>
            <div>
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea id="message" rows={4} className={input} value={f.message} onChange={set('message')} />
            </div>
            <button type="submit" className="w-full rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-500">
              Send Enquiry on WhatsApp
            </button>
            <p className="text-sm text-slate-500">This opens WhatsApp with your details filled in. Your enquiry is only sent once you press Send in WhatsApp.</p>
            {sent && <p role="status" className="rounded-lg bg-aqua-500/15 p-3 text-sm text-navy-900">WhatsApp has been opened with your details. Please press Send there to complete your enquiry.</p>}
          </form>
        </Wrap>
      </section>
    </Page>
  )
}
