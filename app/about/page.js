import Link from 'next/link'

export const metadata = {
  title: 'About Headcanon Generator | headcanon.app',
  description:
    'Learn how the headcanon generator supports writers, RPG game masters, and creators with rapid character development tools.',
}

const audience = [
  {
    heading: 'Storytellers Who Need Speed',
    body: 'Novelists and serial writers use the headcanon generator to translate brainstorms into character arcs without losing cohesion or emotional depth.',
  },
  {
    heading: 'Game Masters Who Thrive on Detail',
    body: 'Tabletop RPG leaders adopt the headcanon generator to prepare reusable NPC dossiers, freeing prep time for tactical design and player engagement.',
  },
  {
    heading: 'Fan Creators & Illustrators',
    body: 'Artists and fanfic authors rely on the headcanon generator to deliver personality traits, visual cues, and backstory beats that align with canon settings.',
  },
  {
    heading: 'Performers & VTubers',
    body: 'Streamers and cosplayers use the headcanon generator to maintain continuity across episodes, interviews, and community events.',
  },
]

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-slate-900">About Headcanon Generator</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          The headcanon generator began as an internal tool for writers who needed to keep sprawling casts consistent. Today it powers workflows for studios, indie authors, and creative teams who want dependable character development without sacrificing imagination.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <article key={item.heading} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-600">
          Every feature we ship—focus filters, JSON exports, responsive UI—reinforces a simple promise: the headcanon generator should feel like a collaborator. It is designed to suggest ideas, surface structure, and keep your creative instincts in the driver seat.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            Back to Headcanon Generator
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-indigo-400 px-6 py-3 text-sm font-semibold text-indigo-500 transition hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            View Use Cases
          </Link>
        </div>
      </section>
    </main>
  )
}
