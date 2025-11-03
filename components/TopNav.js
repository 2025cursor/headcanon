'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Headcanon Generator' },
  { href: '/#use-cases', label: 'Use Cases' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
]

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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
          className="hidden items-center gap-3 overflow-x-auto text-sm font-semibold text-slate-700 sm:flex sm:gap-6"
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
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-600 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition ${
                isOpen ? 'translate-y-2.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute inset-x-0 top-2.5 h-0.5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current transition ${
                isOpen ? '-translate-y-2.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
        <div
          className={`absolute left-4 right-4 top-full z-50 sm:hidden ${
            isOpen ? 'pointer-events-auto opacity-100 translate-y-2' : 'pointer-events-none opacity-0 -translate-y-1'
          } transition-all duration-200 ease-out`}
        >
          <nav className="flex flex-col gap-2 rounded-2xl border border-indigo-100 bg-white/95 p-4 text-sm font-semibold text-slate-700 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
