import { NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent'

const PROMPT_TEMPLATE = `You are a creative character development expert specializing in generating believable and engaging headcanons.

=== INPUT PARAMETERS ===
Character Name/Type: {CHARACTER_INPUT}
Genre: {GENRE}
Gender: {GENDER}
Character Focus: {FOCUS_AREAS} (array: can include Personality Traits, Backstory Hooks, Physical Description, Motivations, Character Flaws, Character Concept)
Additional Details: {CUSTOM_DETAILS}

=== GENERATION RULES ===
1. Generate 5-8 unique headcanons based on selected focus areas
2. Each headcanon should be 40-80 words
3. Match the selected genre's tone and conventions
4. Incorporate the specified gender naturally (if not "Any")
5. Prioritize selected focus areas but maintain variety
6. Make headcanons specific and vivid, avoiding generic statements
7. Ensure headcanons are character-building and narratively useful

=== FOCUS AREA GUIDELINES ===
- Personality Traits: Quirks, habits, emotional patterns, social behaviors
- Backstory Hooks: Past events, childhood experiences, formative moments
- Physical Description: Appearance details, mannerisms, unique features
- Motivations: Goals, desires, driving forces, what pushes them forward
- Character Flaws: Weaknesses, fears, internal conflicts, negative traits
- Character Concept: Core identity, archetype variations, thematic elements

=== GENRE CONSIDERATIONS ===
{GENRE} genre specifics:
- Fantasy: Magic, quests, mythical elements
- Sci-Fi: Technology, future societies, space elements
- Romance: Relationships, emotional depth, intimate details
- Horror: Dark past, fears, psychological elements
- Contemporary: Modern life, realistic struggles, relatable situations
- Historical: Period-appropriate details, cultural context

=== OUTPUT FORMAT ===
Return ONLY a valid JSON object (no markdown, no code blocks):

{
  "headcanons": [
    {
      "content": "The headcanon text",
      "focus": "Primary focus area this addresses",
      "tags": ["tag1", "tag2"]
    }
  ],
  "character_summary": "Brief 1-sentence character essence based on inputs"
}

=== QUALITY CHECKS ===
✓ Each headcanon is specific and actionable for writers
✓ Headcanons complement each other without contradicting
✓ Language is evocative and imagery-rich
✓ Avoids clichés and overused tropes
✓ Respects the genre's conventions

Now generate headcanons based on the provided inputs.`

export async function POST(request) {
  try {
    const body = await request.json()
    const { 
      character_name, 
      custom_description, 
      length, 
      genre = 'fantasy', 
      gender = 'any', 
      character_focus = ['personality'] 
    } = body

    console.log('API Key available:', !!GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE')
    console.log('Request body:', { character_name, custom_description, length, genre, gender, character_focus })

    if (!character_name?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Character name is required' },
        { status: 400 }
      )
    }

    if (!character_focus || character_focus.length === 0) {
      return NextResponse.json(
        { success: false, error: 'At least one character focus is required' },
        { status: 400 }
      )
    }

    // Determine headcanon count based on length
    const lengthMap = {
      'short': 3,
      'medium': 5,
      'long': 8
    }
    const headcanon_count = lengthMap[length] || 5

    // Format character focus for the prompt
    const focusLabels = {
      'personality': 'Personality Traits',
      'backstory': 'Backstory Hooks',
      'physical': 'Physical Description',
      'motivations': 'Motivations',
      'flaws': 'Character Flaws',
      'concept': 'Character Concept'
    }
    const focusText = character_focus.map(f => focusLabels[f] || f).join(', ')

    // Prepare the prompt
    const prompt = PROMPT_TEMPLATE
      .replace(/{CHARACTER_INPUT}/g, character_name)
      .replace(/{GENRE}/g, genre)
      .replace(/{GENDER}/g, gender)
      .replace(/{FOCUS_AREAS}/g, focusText)
      .replace(/{CUSTOM_DETAILS}/g, custom_description || 'No additional context provided')

    // Call Gemini API
    console.log('Making API call to:', `${GEMINI_API_URL}?key=${GEMINI_API_KEY.substring(0, 10)}...`)
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    })

    console.log('API Response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error response:', errorText)
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('Gemini raw response received for:', character_name)
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API')
    }

    const generatedText = data.candidates[0].content.parts[0].text
    
    // Try to parse JSON from the response
    let responseData = {}
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        responseData = JSON.parse(jsonMatch[0])
      } else {
        // Fallback: try to parse the entire response
        responseData = JSON.parse(generatedText)
      }
      
      // Ensure we have the expected structure
      if (!responseData.headcanons) {
        throw new Error('Invalid response structure')
      }
      
      const normalizeHeadcanon = (item) => {
        if (!item || typeof item !== 'object') {
          return {
            focus: 'General',
            category: 'mixed',
            content: typeof item === 'string' ? item : '',
            tags: [],
            raw: item,
          }
        }

        const focusLabel = typeof item.focus === 'string' && item.focus.trim().length > 0
          ? item.focus.trim()
          : 'General'

        const category = focusLabel.toLowerCase().replace(/\s+/g, '_')
        const tags = Array.isArray(item.tags)
          ? item.tags
              .filter(tag => typeof tag === 'string' && tag.trim().length > 0)
              .map(tag => tag.trim())
          : []

        return {
          focus: focusLabel,
          category: category || 'mixed',
          content: item.content || '',
          tags,
          raw: item,
        }
      }

      const headcanons = responseData.headcanons.map(normalizeHeadcanon)
      console.log('Normalized headcanon count:', headcanons.length)
      
      return NextResponse.json({
        success: true,
        headcanons: headcanons,
        character_name: character_name,
        character_summary: responseData.character_summary
      })
      
    } catch (parseError) {
      console.error('JSON parsing error:', parseError)
      // If JSON parsing fails, create a simple response
      const headcanons = [{
        category: 'mixed',
        focus: 'General',
        content: generatedText,
        tags: [],
        raw: { content: generatedText },
      }]

      console.log('Fallback headcanon response generated for:', character_name)
      
      return NextResponse.json({
        success: true,
        headcanons: headcanons,
        character_name: character_name
      })
    }

  } catch (error) {
    console.error('Error generating headcanons:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate headcanons. Please check your API key and try again.' 
      },
      { status: 500 }
    )
  }
}
