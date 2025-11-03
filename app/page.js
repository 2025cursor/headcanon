'use client'

import { useState } from 'react'

const focusOptions = [
  { value: 'personality', label: 'Personality Traits', icon: '💭' },
  { value: 'backstory', label: 'Backstory Hooks', icon: '📚' },
  { value: 'physical', label: 'Physical Description', icon: '👤' },
  { value: 'motivations', label: 'Motivations', icon: '🎯' },
  { value: 'flaws', label: 'Character Flaws', icon: '⚠️' },
  { value: 'concept', label: 'Character Concept', icon: '💡' },
]

const categoryStyles = {
  daily_life: {
    name: '日常生活',
    icon: '🏠',
    badge: 'border-sky-200 bg-sky-100 text-sky-800',
  },
  relationships: {
    name: '人际关系',
    icon: '👥',
    badge: 'border-emerald-200 bg-emerald-100 text-emerald-700',
  },
  past: {
    name: '过往经历',
    icon: '📚',
    badge: 'border-amber-200 bg-amber-100 text-amber-800',
  },
  skills: {
    name: '技能特长',
    icon: '⭐',
    badge: 'border-indigo-200 bg-indigo-100 text-indigo-700',
  },
  personality: {
    name: '性格特质',
    icon: '💭',
    badge: 'border-fuchsia-200 bg-fuchsia-100 text-fuchsia-700',
  },
  physical: {
    name: '外貌特征',
    icon: '👤',
    badge: 'border-lime-200 bg-lime-100 text-lime-700',
  },
  motivations: {
    name: '动机目标',
    icon: '🎯',
    badge: 'border-purple-200 bg-purple-100 text-purple-700',
  },
  flaws: {
    name: '角色缺陷',
    icon: '⚠️',
    badge: 'border-rose-200 bg-rose-100 text-rose-700',
  },
  mixed: {
    name: '综合设定',
    icon: '🎭',
    badge: 'border-violet-200 bg-violet-100 text-violet-700',
  },
}

const getCategoryInfo = (category) => {
  if (!category) {
    return categoryStyles.mixed
  }

  if (categoryStyles[category]) {
    return categoryStyles[category]
  }

  const label =
    typeof category === 'string' && category.length > 0
      ? category.replace(/_/g, ' ')
      : '其他'

  return {
    name: label,
    icon: '✨',
    badge: 'border-slate-200 bg-slate-100 text-slate-700',
  }
}

const useCases = [
  {
    title: 'Creative Writing Projects',
    description:
      'Draft nuanced protagonists, villains, and supporting casts with this headcanon generator so their motivations stay consistent across chapters.',
  },
  {
    title: 'Tabletop RPG Campaigns',
    description:
      'Spin up NPCs or player characters for D&D, Pathfinder, and other systems without losing backstory depth by exporting headcanon cards for each session.',
  },
  {
    title: 'Fan Fiction Development',
    description:
      'Blend canon lore with fresh traits to create original characters that feel at home in existing universes using reusable headcanon presets.',
    tag: 'OC Art Commissions',
  },
  {
    title: 'Visual Art Inspiration',
    description:
      'Gather prompts for illustrators, VTubers, and concept artists who need quick personality anchors powered by the headcanon generator.',
  },
]

const faqItems = [
  {
    question: 'What is the Headcanon Generator?',
    answer:
      'It is an interactive tool that turns your character notes into ready-to-use headcanons—complete with personality beats, backstory hooks, and tonal guidance for stories, RPG sessions, or art briefs.',
  },
  {
    question: 'How do I get the best results from this headcanon generator?',
    answer:
      'Choose a genre, pick at least one focus area, and add a few concrete details—locations, conflicts, or aesthetics help the AI stay grounded and yield richer headcanons.',
  },
  {
    question: 'Is there a limit to how many headcanons I can generate?',
    answer:
      'You control the headcanon count via the length menu. Regenerate as needed, but keep API quotas in mind when sharing keys.',
  },
  {
    question: 'Can I fine-tune the tone for different settings?',
    answer:
      'Yes. Select the closest genre and specify setting cues such as “Victorian gothic” or “retro-futurist metropolis” in Additional Details.',
  },
  {
    question: 'Are the generated headcanons unique?',
    answer:
      'Each run blends your current selections with fresh phrasing. Save the results you like, then rerun with new focuses or details whenever you want additional variations.',
  },
]

const aboutAudience = [
  {
    title: 'Fiction Writers',
    description:
      'Outline consistent personalities and motivations for protagonists, antagonists, or ensemble casts across novels, serials, or scripts.',
  },
  {
    title: 'Tabletop RPG Game Masters',
    description:
      'Quickly craft memorable NPCs, villains, and companions so every session stays character-driven without last-minute prep.',
  },
  {
    title: 'Fan-Creators & Illustrators',
    description:
      'Enrich fan fiction or commissions with vivid quirks, backstory hooks, and visual cues that mesh with canon worlds.',
  },
  {
    title: 'Roleplayers & VTubers',
    description:
      'Build expandable lore and emotional beats that help audiences connect with original livestream or cosplay personas.',
  },
]

const insightSections = [
  {
    title: 'Why Writers Choose This Headcanon Generator',
    paragraphs: [
      'This headcanon generator earns the trust of novelists because it turns vague character notes into story-ready insights without forcing a single archetype. By pairing genre awareness with focus filters, the headcanon generator surfaces subtle emotional beats that keep long-form narratives coherent.',
      'When deadlines pile up, the headcanon generator becomes an always-on collaborator that proposes backstory twists, relationship tensions, and sensory details. Each pass through the headcanon generator adds narrative depth while preserving the core voice you already established for the cast.',
      'Teams appreciate that the headcanon generator logs precise tags for every output, making it easy to collect and sort personality traits during writers’ rooms or editor reviews. This shared vocabulary keeps the headcanon generator at the center of collaborative outlining sessions.',
    ],
  },
  {
    title: 'How the Headcanon Generator Fits Into Your Workflow',
    paragraphs: [
      'Plotters start outlining their arcs inside a planning doc, then paste prompts into the headcanon generator to fill gaps in motivation and tone. Because the headcanon generator accepts genre and focus controls, it adapts to fantasy epics, contemporary dramas, or experimental fiction.',
      'Discovery writers keep the headcanon generator open beside their drafting tool, refreshing ideas whenever a scene stalls. The headcanon generator reveals quirks and habits that re-energize dialogue, letting the author dive back into the manuscript with momentum.',
      'Story editors collect the JSON view from the headcanon generator and feed it into continuity trackers. With one structured export, the headcanon generator ensures every subplot shares consistent emotional logic across a series bible or pitch deck.',
    ],
  },
  {
    title: 'Advanced Techniques for the Headcanon Generator',
    paragraphs: [
      'Mix multiple focus areas before running the headcanon generator to encourage layered results. A blend of Personality Traits and Motivations prompts the headcanon generator to deliver actionable cause-and-effect statements for climactic turning points.',
      'Rotate through genres mid-project to stress test tone. Switching the headcanon generator from mystery to romance exposes alternative emotional pathways, and the headcanon generator’s tag system highlights which beats resonate most for your market.',
      'Pair the headcanon generator with visual mood boards by copying tags into design briefs. Artists can reference the same headcanon generator output that the writing staff used, keeping illustration, cosplay, and marketing materials aligned.',
    ],
  },
  {
    title: 'Results from Using This Headcanon Generator',
    paragraphs: [
      'Authors report finishing character sheets twice as fast once the headcanon generator becomes part of their pitch workflow. The headcanon generator takes scattered bullet points and returns fully formed scene hooks ready for auditions or query letters.',
      'RPG game masters schedule fewer prep hours because the headcanon generator produces reusable NPC lore blocks. Players notice the improvement immediately, crediting the headcanon generator for richer improvisation and believable stakes.',
      'VTubers and streamers rely on the headcanon generator to keep serialized performances consistent. Every time a new episode drops, the headcanon generator refreshes motivations and emotional beats, so audiences stay invested in the ongoing storyline.',
    ],
  },
]

export default function Home() {
  const [characterName, setCharacterName] = useState('')
  const [customDescription, setCustomDescription] = useState('')
  const [length, setLength] = useState('medium')
  const [genre, setGenre] = useState('fantasy')
  const [gender, setGender] = useState('any')
  const [characterFocus, setCharacterFocus] = useState(['personality'])
  const [headcanons, setHeadcanons] = useState([])
  const [characterSummary, setCharacterSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [loadingTip, setLoadingTip] = useState('')

  const handleCharacterFocusChange = (focus) => {
    setCharacterFocus((prev) => {
      if (prev.includes(focus)) {
        return prev.filter((f) => f !== focus)
      }
      return [...prev, focus]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!characterName.trim()) {
      setError('Please enter a character name.')
      return
    }

    if (characterFocus.length === 0) {
      setError('Please select at least one character focus')
      return
    }

    const tips = [
      'Shaping backstory beats…',
      'Polishing personality quirks…',
      'Threading motivations into place…',
      'Curating signature habits…',
    ]
    setLoadingTip(tips[Math.floor(Math.random() * tips.length)])
    setLoading(true)
    setError('')
    setHeadcanons([])
    setCharacterSummary('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          character_name: characterName,
          custom_description: customDescription,
          length,
          genre,
          gender,
          character_focus: characterFocus,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setHeadcanons(data.headcanons)
        setCharacterSummary(data.character_summary || '')
      } else {
        setError(data.error || 'Failed to generate headcanons')
      }
    } catch (err) {
      setError('Failed to generate headcanons. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
      setLoadingTip('')
    }
  }

  return (
    <main
      id="top"
      className="flex min-h-screen w-full justify-center px-4 pb-6 pt-12 sm:px-6 lg:px-10 lg:pt-14"
    >
      <div className="flex w-full max-w-5xl flex-col gap-6 lg:gap-10">
        <section
          id="hero"
          className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-12"
        >
          <header className="space-y-2 text-center sm:space-y-3">
            <h1 className="bg-gradient-to-br from-indigo-400 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Headcanon Generator for Original Characters
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              This headcanon generator lets you combine genre, focus areas, and custom notes so Gemini can craft vivid story hooks, motivations, and quirks for every character.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="characterName"
                  className="text-sm font-semibold text-slate-700"
                >
                  Character Name/Type
                </label>
                <input
                  type="text"
                  id="characterName"
                  value={characterName}
                  onChange={(e) => {
                    setCharacterName(e.target.value)
                    if (error.includes('name')) {
                      setError('')
                    }
                  }}
                  placeholder="e.g. Captain Liora, wandering archivist"
                  className={[
                    'w-full rounded-2xl border-2 bg-white px-4 py-3 text-base text-slate-800 shadow-sm transition focus:outline-none focus:ring-2',
                    error.includes('name')
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                      : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-200',
                  ].join(' ')}
                />
                {error.includes('name') && (
                  <p className="text-xs font-semibold text-rose-500">Please enter a character name.</p>
                )}
              </div>

              <div className="grid gap-3 xs:grid-cols-3">
                <div className="space-y-2">
                <label
                  htmlFor="length"
                  className="text-sm font-semibold text-slate-700"
                >
                  Length
                </label>
                  <select
                    id="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-base text-slate-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <option value="short">Short (3)</option>
                    <option value="medium">Medium (5)</option>
                    <option value="long">Long (8)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="genre" className="text-sm font-semibold text-slate-700">
                    Genre
                  </label>
                  <select
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-base text-slate-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <option value="fantasy">Fantasy</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="modern">Modern</option>
                    <option value="historical">Historical</option>
                    <option value="romance">Romance</option>
                    <option value="mystery">Mystery</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                    <option value="slice-of-life">Slice of Life</option>
                    <option value="superhero">Superhero</option>
                  </select>
                </div>
                <div className="space-y-2 xs:col-span-1">
                  <label htmlFor="gender" className="text-sm font-semibold text-slate-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-base text-slate-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-semibold text-slate-700">
                Character Focus (select one or more)
              </span>
              <div className="grid gap-2 xs:grid-cols-2 sm:grid-cols-2">
                {focusOptions.map((focus) => {
                  const isActive = characterFocus.includes(focus.value)
                  return (
                    <label
                      key={focus.value}
                      className={[
                        'flex items-center gap-2 rounded-2xl border-2 p-3 text-sm font-semibold transition sm:text-base sm:gap-3',
                        isActive
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-400 hover:bg-indigo-50/70',
                      ].join(' ')}
                    >
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => handleCharacterFocusChange(focus.value)}
                        className="h-5 w-5 shrink-0 accent-indigo-500"
                      />
                      <span className="text-lg">{focus.icon}</span>
                      <span className="flex-1">{focus.label}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="customDescription"
                className="text-sm font-semibold text-slate-700"
              >
                Additional Details (optional)
              </label>
              <textarea
                id="customDescription"
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                placeholder="Add any specific themes, elements, or traits to steer the generator…"
                className="min-h-[120px] w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-800 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500 sm:text-sm">
                {loading
                  ? loadingTip || 'Generating headcanons…'
                  : 'Tip: Combine several focus areas to blend personality, backstory, and visual detail.'}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Crafting headcanons…
                  </>
                ) : (
                  'Generate'
                )}
              </button>
            </div>
          </form>
        </section>

        {headcanons.length > 0 && (
          <section className="rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">✨ Generated Headcanons</h3>
                {characterSummary && (
                  <p className="mt-1 text-sm text-slate-600">{characterSummary}</p>
                )}
              </div>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                {headcanons.length} results
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {headcanons.map((headcanon, index) => {
                const focusSlug = (headcanon.focus || headcanon.category || 'mixed')
                  .toLowerCase()
                  .replace(/\s+/g, '_')
                const categoryInfo = getCategoryInfo(focusSlug)
                return (
                  <article
                    key={index}
                    className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${categoryInfo.badge}`}
                      >
                        <span>{categoryInfo.icon}</span>
                        <span>{headcanon.focus || categoryInfo.name}</span>
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {headcanon.content}
                    </p>
                    {Array.isArray(headcanon.tags) && headcanon.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {headcanon.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </section>
        )}

        <section
          id="use-cases"
          className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-10"
        >
          <header className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Use Cases</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
              Put this headcanon generator to work for storytelling, worldbuilding, and visual ideation across screens.
            </p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
                {item.tag && (
                  <span className="mt-4 inline-flex w-fit items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {item.tag}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-10"
        >
          <header className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
              Quick answers for contributors and storytellers experimenting with the headcanon generator on web or mobile.
            </p>
          </header>

          <div className="mt-8 space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white/95 shadow-sm transition hover:border-indigo-400"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-500 transition group-open:rotate-45 group-open:bg-indigo-500 group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-12"
        >
          <header className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Headcanon Generator</h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
              We designed the headcanon generator to support storytellers who need high-quality character hooks fast—without sacrificing depth or consistency.
            </p>
          </header>

          <ol className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {aboutAudience.map((entry, index) => (
              <li
                key={entry.title}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"
              >
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{entry.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{entry.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-lg sm:p-8 lg:p-12">
          <header className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Deep Dive into the Headcanon Generator</h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
              Explore how this headcanon generator transforms fragmented ideas into world-class character documentation across every stage of production.
            </p>
          </header>

          <div className="mt-8 space-y-10">
            {insightSections.map((section) => (
              <article key={section.title} className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-900">{section.title}</h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="scroll-mt-24 rounded-3xl border border-white/20 bg-white/90 p-6 text-center shadow-2xl backdrop-blur-lg sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Start Making Your Headcanons</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Enter a name, select your focus areas, and let the headcanon generator deliver cohesive personality notes, backstory hooks, and visual cues ready for your next project—this headcanon generator keeps every iteration organized so you can ship stories faster.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Generate Your Headcanon
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-indigo-400 px-6 py-3 text-sm font-semibold text-indigo-500 transition hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Learn More About Features
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
