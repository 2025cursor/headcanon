import './globals.css'
import Script from 'next/script'
import TopNav from '../components/TopNav'

export const metadata = {
  title: 'Headcanon Generator – Craft Original Character Ideas Instantly | headcanon.app',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YKC544Q00K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YKC544Q00K');
          `}
        </Script>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
