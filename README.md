# Character Headcanon Generator

A modern Next.js web application that generates character headcanons using Google's Gemini AI API.

## Features

- **AI-Powered Generation**: Uses Google Gemini Pro to create detailed, creative character headcanons
- **Modern UI**: Built with Next.js 14, React, and Tailwind CSS
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application
- **API Routes**: Server-side API handling with Next.js App Router
- **Real-time Generation**: Fast API responses with loading indicators
- **Multiple Categories**: Generates headcanons across different aspects (daily life, relationships, past, skills, personality)

## Installation and Setup

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure API Key**:
   - Get your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env.local` file in the root directory
   - Add your API key:
     ```
     GEMINI_API_KEY=your-actual-api-key-here
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the website**:
   - Open your browser and go to `http://localhost:3000`

## Usage

1. **Enter Character Information**:
   - Character Name: The name of the character you want headcanons for
   - Length: Choose how many headcanons to generate (Short: 3, Medium: 5, Long: 8)
   - Additional Details: Optional context or specific information about the character

2. **Generate Headcanons**:
   - Click the "Generate" button
   - Wait for the AI to process your request
   - View the generated headcanons organized by category

3. **Categories**:
   - **Daily Life**: Everyday habits, routines, preferences
   - **Relationships**: How they interact with others
   - **Past**: Background, history, formative experiences
   - **Skills**: Talents, abilities, strengths/weaknesses
   - **Personality**: Quirks, traits, emotional patterns
   - **Mixed**: Combinations of multiple categories

## Project Structure

```
character-headcanon-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts      # API endpoint for headcanon generation
│   ├── globals.css           # Global styles with Tailwind CSS
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page component
├── package.json              # Dependencies and scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── .env.local                # Environment variables (not in git)
└── README.md                 # This file
```

## Technology Stack

- **Next.js 14**: React framework with App Router
- **React 18**: Frontend library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **Google Gemini API**: AI text generation

## API Configuration

The application uses Google's Gemini Pro API. To set up:

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file:
   ```
   GEMINI_API_KEY=your-actual-api-key-here
   ```

## Build and Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy**: The app can be deployed to Vercel, Netlify, or any platform that supports Next.js

## Customization

- **Modify the prompt**: Edit the `PROMPT_TEMPLATE` in `app/api/generate/route.ts`
- **Adjust categories**: Update the category system in the API route and frontend
- **Change styling**: Modify Tailwind classes or add custom CSS
- **Add features**: Extend the API routes and React components

## Important Notes

- **API Key Security**: Never commit your actual API key to version control
- **Environment Variables**: Use `.env.local` for local development
- **Rate Limits**: Be aware of Google Gemini API rate limits and usage quotas
- **Error Handling**: The application includes comprehensive error handling

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## Troubleshooting

- **Port already in use**: Next.js will automatically use the next available port
- **API errors**: Verify your Gemini API key is correct and has proper permissions
- **Build errors**: Ensure all dependencies are installed and TypeScript types are correct
- **Generation failures**: Check your internet connection and API quota limits

## 许可证

MIT License