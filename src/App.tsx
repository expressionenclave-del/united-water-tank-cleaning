import { Routes, Route } from 'react-router-dom'
import { Header, Footer, MobileBar } from './components/Layout'
import Home from './pages/Home'
import { About, ServicesPage, ProcessPage, Areas, FAQPage, Privacy, NotFound } from './pages/Others'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-process" element={<ProcessPage />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
    </div>
  )
}
