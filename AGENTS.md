# Repository Guidelines

This guide summarizes the patterns and expectations for working on the Character Headcanon Generator.

## Project Structure & Module Organization
- `app/page.js`: Client-side experience, including form state, validation, and result rendering.
- `app/api/generate/route.js`: Next.js App Router function that calls the Gemini API and enforces request validation.
- `app/globals.css` and `tailwind.config.js`: Tailwind-driven styling primitives; keep shared utilities here.
- Root configs such as `next.config.js`, `postcss.config.js`, and `package.json` must stay lightweight to keep the deployment footprint small.

## Build, Test, and Development Commands
- `npm run dev`: Starts the local development server on port 3000 with hot reloading.
- `npm run lint`: Runs Next.js’ ESLint pipeline; fix reported issues before pushing.
- `npm run build`: Produces the production bundle and surfaces type/route compilation errors.
- `npm start`: Serves the build output; use for smoke-testing a production-like build.

## Coding Style & Naming Conventions
- Use modern React with functional components and hooks; avoid class components.
- Prefer `const` declarations and 2-space indentation to match existing files.
- Component files are `PascalCase` when split out; helper modules use `camelCase`.
- Keep API route handlers lean: validate input early, encapsulate external calls, and log only actionable details (no secrets).
- Run `npm run lint` after significant edits so Tailwind class usage and JSX rules stay consistent.

## Testing Guidelines
- Automated tests are not yet configured; add unit coverage with React Testing Library or integration checks with Playwright when introducing non-trivial features.
- For manual QA, exercise all length options, focus toggles, and failure paths exposed by `route.js`.
- Include regression steps in PR descriptions until an automated suite is in place.

## Commit & Pull Request Guidelines
- Follow a concise, imperative commit style such as `Add genre picker validation`; squash cosmetic fixes locally.
- Each PR should describe the user-facing change, outline testing performed, and link any tracking issue.
- Attach screenshots or console output when UI or API behavior changes.
- Keep PRs scoped: isolate refactors from feature work to preserve review velocity.

## Security & Configuration Tips
- Create `.env.local` with `GEMINI_API_KEY=...`; never hard-code or commit sensitive keys.
- Rotate API keys if logs or external vendors suggest exposure.
- Validate new environment variables in `route.js` and document them in `README.md` to prevent deploy regressions.
