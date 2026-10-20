import { useState, ReactNode } from 'react'
import { ChevronDown, Droplets } from 'lucide-react'
import { services, steps, faqs, business as b } from '../config'
import { Pic, kindFor } from './Illustrations'
import { BookButton, CallButton, WhatsAppButton, EmailButton } from './Layout'

export function Wrap({ children, cls = '' }: { children: ReactNode; cls?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${cls}`}>{children}</div>
}

export function Title({ kicker, title, text }: { kicker?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-aqua-600">{kicker}</p>}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  )
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-aqua-700 py-16 text-center">
      <Wrap>
        <h1 className="text-4xl font-bold !text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">{text}</p>
      </Wrap>
    </section>
  )
}

export function ServicesGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.slice(0, limit).map((s) => (
        <article key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <Pic src={`/images/${kindFor(s.title)}.jpg`} kind={kindFor(s.title)} alt={s.title} className="mb-4 aspect-video w-full rounded-xl" />
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 flex-1 text-sm text-slate-600">{s.desc}</p>
          <WhatsAppButton
            text="Request This Service"
            msg={`Hello United Water Tank Cleaning Service, I would like to request: ${s.title}. Please guide me regarding availability and pricing.`}
            cls="mt-5 bg-navy-900 px-4 py-2.5 text-sm text-white hover:bg-navy-700"
          />
        </article>
      ))}
    </div>
  )
}

export function ProcessList() {
  return (
    <ol className="mx-auto max-w-3xl space-y-6 border-l-2 border-aqua-500/40 pl-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-bold text-aqua-400">{i + 1}</span>
          <h3 className="font-semibold">{s.title}</h3>
          <p className="text-sm text-slate-600">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function FAQList() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="rounded-xl border border-slate-200 bg-white">
          <h3>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua-500"
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
              <ChevronDown aria-hidden="true" className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
            </button>
          </h3>
          {open === i && (
            <p id={`faq-${i}`} className="px-5 pb-5 text-slate-600">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export function CTA() {
  return (
    <section className="bg-navy-900 py-16 text-center">
      <Wrap>
        <h2 className="text-3xl font-bold !text-white sm:text-4xl">Give Your Water Tank the Care It Deserves</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Contact {b.name} to discuss your tank cleaning requirements and arrange a convenient appointment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CallButton cls="bg-aqua-500 text-navy-900 hover:bg-aqua-400" />
          <WhatsAppButton />
          <EmailButton />
        </div>
      </Wrap>
    </section>
  )
}

export { BookButton }
