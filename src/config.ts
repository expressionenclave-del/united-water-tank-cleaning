// ===== EDIT YOUR BUSINESS DETAILS HERE (one place) =====
export const business = {
  name: 'United Water Tank Cleaning Service',
  phone: '03091031676',
  tel: 'tel:+923091031676',
  whatsapp: 'https://wa.me/923091031676',
  email: 'unitedwatertankcleaningservice@gmail.com',
  mailto: 'mailto:unitedwatertankcleaningservice@gmail.com',
  map: 'https://share.google/T9F2hAOqe8ib7ivZx',
  copyright: '© 2026 United Water Tank Cleaning Service by Sajid Ali',
  waMessage:
    'Hello United Water Tank Cleaning Service, I would like to inquire about your water tank cleaning services. Please guide me regarding availability and pricing.',
  // Confirmed service areas. Add more areas here, e.g. ['Karachi', 'Area Name'].
  areas: ['Karachi'] as string[],
}

export const waLink = (msg: string = business.waMessage) =>
  `${business.whatsapp}?text=${encodeURIComponent(msg)}`

// Edit, add or remove services here. Confirm each one is really offered.
export const services = [
  { title: 'Underground Water Tank Cleaning', desc: 'Cleaning of underground tanks and reservoirs, planned around the tank size, access and condition.' },
  { title: 'Overhead Water Tank Cleaning', desc: 'Careful cleaning of rooftop and overhead tanks to help keep stored water cleaner.' },
  { title: 'Residential Water Tank Cleaning', desc: 'Dependable tank cleaning for houses and family homes, arranged at a convenient time.' },
  { title: 'Commercial Water Tank Cleaning', desc: 'Tank cleaning for offices, shops and commercial properties with clear communication.' },
  { title: 'Apartment and Building Water Tank Cleaning', desc: 'Cleaning of shared and larger water storage systems for apartments and buildings.' },
  { title: 'Plastic Water Tank Cleaning', desc: 'Suitable cleaning methods for plastic storage tanks of different sizes.' },
  { title: 'Sludge and Sediment Removal', desc: 'Removal of accumulated sludge, sediment and debris from the tank as appropriate.' },
  { title: 'Water Tank Disinfection', desc: 'Disinfection of the tank after cleaning, where applicable to the tank type and agreed service.' },
]

export const steps = [
  { title: 'Contact Our Team', text: 'Call, message us on WhatsApp or send an email.' },
  { title: 'Discuss Your Tank and Requirements', text: 'Tell us the tank type, size, location and any concerns.' },
  { title: 'Confirm the Service and Appointment', text: 'We agree the scope of work and a convenient time.' },
  { title: 'Inspect and Prepare the Tank', text: 'The tank and surrounding area are checked and prepared.' },
  { title: 'Remove Water, Sludge, and Debris as Appropriate', text: 'Water and accumulated material are removed as the job requires.' },
  { title: "Clean the Tank's Interior Surfaces", text: 'Interior surfaces are cleaned using a suitable method.' },
  { title: 'Rinse and Disinfect Where Applicable', text: 'The tank is rinsed, and disinfected where agreed and applicable.' },
  { title: 'Perform a Final Inspection', text: 'A final check is carried out before the job is completed.' },
]

export const faqs = [
  { q: 'Why should I clean my water tank?', a: 'Over time, dirt, sediment and residue can build up inside a storage tank and may affect the cleanliness of stored water. Regular cleaning is part of good tank maintenance.' },
  { q: 'Do you clean underground and overhead tanks?', a: 'Yes, we offer underground and overhead tank cleaning. Please share your tank details so we can discuss the right approach.' },
  { q: 'How often should a water tank be cleaned?', a: 'It depends on the tank type, its condition and how it is used. We can advise on a suitable interval once we understand your situation.' },
  { q: 'How long does the cleaning process take?', a: 'Duration depends on tank size, type, condition and access. We will discuss the expected timing with you when confirming the appointment.' },
  { q: 'What information is required for a quotation?', a: 'Please tell us the tank type (underground, overhead or plastic), its approximate size, your area, and any concerns about its condition.' },
  { q: 'Do you provide residential and commercial services?', a: 'Yes. We serve homes, apartments, buildings, offices, shops and other suitable facilities.' },
  { q: 'Can I request an appointment through WhatsApp?', a: 'Yes. Tap the WhatsApp button and send us your details to discuss availability and arrange a convenient time.' },
  { q: 'How can I contact United Water Tank Cleaning Service?', a: 'You can call 03091031676, message us on WhatsApp at the same number, or email unitedwatertankcleaningservice@gmail.com.' },
  { q: 'Do you provide tank disinfection?', a: 'Yes, we provide tank disinfection where applicable. Please mention it when you enquire so we can confirm the right approach for your tank.' },
  { q: 'Which areas do you serve?', a: 'We serve Karachi. Please contact us with your exact area and we will confirm availability.' },
]