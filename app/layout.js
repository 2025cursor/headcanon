import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Headcanon Generator – Craft Original Character Ideas Instantly | headcanon.example',
  description:
    'Use this AI headcanon generator to build original characters with vivid backstories, motivations, and traits for fiction, RPG campaigns, or art references.',
  keywords: [
    'headcanon generator',
    'character ideas',
    'original character builder',
    'RPG character creator',
    'storytelling tools',
  ],
  icons: {
    icon: '/favicon-64.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'US-CA',
    'geo.position': '37.7749;-122.4194',
    'ICBM': '37.7749, -122.4194',
    'geo.placename': 'San Francisco',
  },
}

function TopNav() {
  const navItems = [
    { href: '/', label: 'Headcanon Generator' },
    { href: '/#use-cases', label: 'Use Cases' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Headcanon Generator logo"
            width={210}
            height={80}
            className="h-12 w-auto sm:h-16"
            priority
          />
        </Link>
        <nav
          className="flex items-center gap-3 overflow-x-auto text-sm font-semibold text-slate-700 sm:gap-6"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-indigo-100 hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
