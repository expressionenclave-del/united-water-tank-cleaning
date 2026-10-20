import { useEffect, useState, ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, MessageCircle, Mail, Menu, X, MapPin } from 'lucide-react'
import { business as b, waLink, services } from '../config'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2DD4D4" />
            <stop offset="1" stopColor="#0E9AA7" />
          </linearGradient>
        </defs>
        <rect x="4" y="6" width="40" height="36" rx="10" fill="#0A1F44" />
        <path d="M24 11c5 7 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8 8-15z" fill="url(#lg)" />
        <path d="M14 36h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className={`leading-tight font-bold ${light ? 'text-white' : 'text-navy-900'}`}>
        United
        <span className="block text-[11px] font-semibold tracking-wider text-aqua-600">WATER TANK CLEANING</span>
      </span>
    </span>
  )
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-500'

export function CallButton({ cls = 'bg-navy-900 text-white hover:bg-navy-700' }: { cls?: string }) {
  return (
    <a href={b.tel} className={`${base} ${cls}`}>
      <Phone size={18} aria-hidden="true" /> Call Now
    </a>
  )
}
export function WhatsAppButton({ text = 'WhatsApp Us', msg, cls = 'bg-emerald-600 text-white hover:bg-emerald-700' }: { text?: string; msg?: string; cls?: string }) {
  return (
    <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className={`${base} ${cls}`}>
      <MessageCircle size={18} aria-hidden="true" /> {text}
    </a>
  )
}
export function EmailButton({ cls = 'border border-white/40 text-white hover:bg-white/10' }: { cls?: string }) {
  return (
    <a href={b.mailto} className={`${base} ${cls}`}>
      <Mail size={18} aria-hidden="true" /> Email Us
    </a>
  )
}
export function BookButton({ cls = 'bg-aqua-500 text-navy-900 hover:bg-aqua-400' }: { cls?: string }) {
  return (
    <Link to="/contact-us" className={`${base} ${cls}`}>
      Book a Service
    </Link>
  )
}

const nav = [
  ['/', 'Home'],
  ['/about-us', 'About Us'],
  ['/services', 'Services'],
  ['/our-process', 'Our Process'],
  ['/faqs', 'FAQs'],
  ['/contact-us', 'Contact Us'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const link = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition hover:text-aqua-600 ${isActive ? 'text-aqua-600' : 'text-navy-900'}`
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" aria-label="United Water Tank Cleaning Service home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end className={link}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <BookButton />
        </div>
        <button
          className="rounded-md p-2 text-navy-900 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col py-2">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end className={link}>
                {label}
              </NavLink>
            ))}
          </div>
          <BookButton cls="w-full bg-aqua-500 text-navy-900" />
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  const l = 'hover:text-aqua-400 transition'
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm">
            Professional water tank cleaning for residential and commercial needs, with clear communication and careful work.
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[...nav, ['/areas-we-serve', 'Areas We Serve'], ['/privacy-policy', 'Privacy Policy']].map(([to, label]) => (
              <li key={to}><Link className={l} to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-semibold text-white">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}><Link className={l} to="/services">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-semibold text-white">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li><a className={l} href={b.tel}>Phone: {b.phone}</a></li>
            <li><a className={l} href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp: {b.phone}</a></li>
            <li><a className={`${l} break-all`} href={b.mailto}>{b.email}</a></li>
            <li><a className={`${l} inline-flex items-center gap-1`} href={b.map} target="_blank" rel="noopener noreferrer"><MapPin size={14} aria-hidden="true" /> View Our Location</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 pb-24 text-center text-sm md:pb-5">{b.copyright}</div>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 md:hidden">
      <CallButton cls="bg-navy-900 text-white py-2.5" />
      <WhatsAppButton cls="bg-emerald-600 text-white py-2.5" />
    </div>
  )
}

export function Page({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [title, description])
  return <>{children}</>
}
