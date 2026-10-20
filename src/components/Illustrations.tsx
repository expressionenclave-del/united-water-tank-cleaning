import { useState } from 'react'
const N = '#0A1F44'
const labels: Record<string, string> = {
  overhead: 'Illustration of an overhead water tank on a rooftop',
  underground: 'Illustration of an underground water tank',
  plastic: 'Illustration of a plastic water storage tank',
  building: 'Illustration of a building with a rooftop water tank',
  sludge: 'Illustration of sediment at the bottom of a water tank',
  clean: 'Illustration of a clean, disinfected water tank',
  house: 'Illustration of a house with a water tank',
}

function Tank({ x, y, w, h, color = N }: { x: number; y: number; w: number; h: number; color?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={w / 8} fill={color} />
      <ellipse cx={x + w / 2} cy={y} rx={w / 2} ry={h / 8} fill="#163A75" />
      <rect x={x + w * 0.12} y={y + h * 0.25} width={w * 0.08} height={h * 0.55} rx="2" fill="#fff" opacity=".2" />
    </g>
  )
}

function Windows({ x, y, cols, rows }: { x: number; y: number; cols: number; rows: number }) {
  const out = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      out.push(<rect key={`${r}-${c}`} x={x + c * 26} y={y + r * 24} width="14" height="14" rx="2" fill="#8EE3EA" />)
  return <>{out}</>
}

export function kindFor(title: string): string {
  const t = title.toLowerCase()
  if (t.includes('underground')) return 'underground'
  if (t.includes('overhead')) return 'overhead'
  if (t.includes('plastic')) return 'plastic'
  if (t.includes('apartment') || t.includes('commercial')) return 'building'
  if (t.includes('sludge')) return 'sludge'
  if (t.includes('disinfect')) return 'clean'
  return 'house'
}

export function TankScene({ kind, className = '' }: { kind: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={labels[kind] ?? labels.house} className={className}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3F9FB" />
          <stop offset="1" stopColor="#8EE3EA" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#sky)" />
      <circle cx="270" cy="34" r="16" fill="#fff" opacity=".7" />

      {kind === 'overhead' && (
        <>
          <rect x="60" y="104" width="200" height="76" fill="#163A75" />
          <rect x="52" y="98" width="216" height="8" fill={N} />
          <rect x="126" y="76" width="6" height="22" fill={N} />
          <rect x="188" y="76" width="6" height="22" fill={N} />
          <Tank x={112} y={32} w={96} h={46} />
          <Windows x={84} y={120} cols={6} rows={2} />
        </>
      )}
      {kind === 'house' && (
        <>
          <rect x="70" y="100" width="130" height="80" fill="#163A75" />
          <polygon points="60,102 135,50 210,102" fill={N} />
          <rect x="120" y="136" width="30" height="44" rx="3" fill="#8EE3EA" />
          <Tank x={218} y={70} w={50} h={46} color="#14B8C4" />
          <rect x="236" y="116" width="6" height="64" fill={N} />
        </>
      )}
      {kind === 'building' && (
        <>
          <rect x="100" y="64" width="120" height="116" fill="#163A75" />
          <rect x="94" y="60" width="132" height="8" fill={N} />
          <Tank x={132} y={28} w={56} h={32} />
          <Windows x={116} y={80} cols={4} rows={4} />
        </>
      )}
      {kind === 'underground' && (
        <>
          <rect x="0" y="68" width="320" height="112" fill="#B8956F" />
          <rect x="0" y="68" width="320" height="8" fill="#6FBF73" />
          <rect x="30" y="34" width="60" height="34" fill="#163A75" />
          <polygon points="24,36 60,10 96,36" fill={N} />
          <rect x="70" y="102" width="190" height="62" rx="14" fill={N} />
          <rect x="70" y="132" width="190" height="32" rx="14" fill="#14B8C4" />
          <rect x="156" y="68" width="18" height="36" fill="#163A75" />
          <rect x="150" y="62" width="30" height="8" rx="3" fill={N} />
        </>
      )}
      {kind === 'plastic' && (
        <>
          <rect x="0" y="152" width="320" height="28" fill="#6FBF73" />
          <rect x="118" y="36" width="84" height="116" rx="18" fill="#14B8C4" />
          <rect x="140" y="26" width="40" height="14" rx="5" fill={N} />
          <rect x="118" y="70" width="84" height="5" fill="#0E9AA7" />
          <rect x="118" y="100" width="84" height="5" fill="#0E9AA7" />
          <rect x="118" y="128" width="84" height="5" fill="#0E9AA7" />
          <rect x="130" y="50" width="8" height="90" rx="4" fill="#fff" opacity=".3" />
        </>
      )}
      {kind === 'sludge' && (
        <>
          <rect x="80" y="24" width="160" height="136" rx="14" fill="#fff" stroke={N} strokeWidth="6" />
          <rect x="86" y="70" width="148" height="84" rx="8" fill="#14B8C4" opacity=".8" />
          <path d="M86 138 q20 -14 40 0 t40 0 t40 0 t28 -4 v20 a8 8 0 0 1 -8 8 h-132 a8 8 0 0 1 -8 -8z" fill="#8B6B4A" />
          <circle cx="130" cy="100" r="6" fill="#fff" opacity=".7" />
          <circle cx="170" cy="86" r="4" fill="#fff" opacity=".7" />
          <circle cx="200" cy="108" r="5" fill="#fff" opacity=".7" />
        </>
      )}
      {kind === 'clean' && (
        <>
          <Tank x={112} y={44} w={96} h={100} color="#14B8C4" />
          <path d="M160 70c10 14 16 22 16 30a16 16 0 0 1-32 0c0-8 6-16 16-30z" fill="#fff" />
          <path d="M254 40l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" fill="#fff" />
          <path d="M70 60l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff" />
        </>
      )}
    </svg>
  )
}

// Shows a real photo from /public/images if it exists, otherwise the illustration.
export function Pic({ src, kind, alt = 'Water tank cleaning service', className = '' }: { src: string; kind: string; alt?: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <TankScene kind={kind} className={className} />
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
