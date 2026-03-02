# GitHub Copilot Instructions for SAFIRA (Next.js)

These instructions ensure generated code follows our Next.js App Router architecture. Do not scaffold separate React apps; use the existing Next.js project only.

## Project Overview
- Stack: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui, TanStack React Query, Zustand, React Hook Form, Zod, i18next, Axios, Jose (JWT), Oxlint/Oxfmt.
- Goal: Modern, accessible UI with strong type safety, i18n, and clean architecture.

## Global Coding Rules
- Always use TypeScript with explicit, strict-friendly types. Avoid any; prefer unknown with type guards.
- Always use functional components with Hooks; no class components.
- Always use named exports for components, hooks, stores, and utilities. Exception: route files in app must export a default component per Next.js requirements.
- Always use the "@/..." alias for internal imports; avoid deep relative paths.
- Keep functions/components small and single-responsibility; use early returns.
- Never ignore TypeScript or lint errors; fix them, do not suppress.
- Never commit console.log or ad-hoc debugging.

## File & Folder Conventions
- Organize by type under src/:
  - components/ (ui, shared, layout, auth, mandate)
  - pages/ (reusable page components)
  - hooks/, services/, lib/, types/, validators/, constants/, stores/, i18n/
- app/ handles routing/initialization only and imports page components from pages/.
- File names: kebab-case. Component names: PascalCase.
- Imports order: Next/React → third‑party → "@/..." internal → import type → relative.
- No barrel imports (no index.ts re-exports); import directly.

## Routing (Next.js App Router)
- Use app/ files for routes; each route file must export a default component.
- Use next/navigation (useRouter) for programmatic navigation.
- Put layouts in app/layout.tsx; include providers at the app level as needed.

## Data Fetching (React Query)
- Always use React Query for server requests:
  - useQuery for GET
  - useMutation for create/update/delete
- Query keys are arrays, e.g., ["mandates", mandateId].
- Handle loading and error states in UI.
- Invalidate relevant queries on mutation success.

## API Client & Auth
- Always use the centralized Axios client from src/services/api-client.ts; do not create new Axios instances or call axios directly.
- Handle JWT via src/lib/auth/ utilities and src/services/; never log tokens or sensitive data.

## Forms (React Hook Form + Zod)
- Define a Zod schema per form in validators/ and derive types via z.infer.
- Use zodResolver(schema) with react-hook-form.
- Use Controller when integrating complex UI components.
- Provide friendly validation messages.

## Internationalization (i18next)
- Always use useTranslation and t() for user-facing strings; never hardcode text.
- Keep translation keys under i18n/locales/* using dot-notation, e.g., common.buttons.submit.
- Support RTL via language configuration; avoid JS-based RTL toggles.

## Styling (Tailwind CSS 4 + shadcn/ui)
- Prefer Tailwind utilities and cn() from lib/utils over inline styles.
- Use base components from components/ui/ and follow the existing design system.
- When width equals height, use size-* instead of w-* and h-*.
- Use rtl:/ltr: variants and logical properties (ps-, pe-, ms-, me-, text-start, text-end).
- Use arbitrary Tailwind values sparingly; if reused, add them to Tailwind config.

## State Management
- Local UI state: useState/useReducer.
- Global client state: use Zustand in stores/ with:
  - Typed state interface + actions
  - create with devtools and persist when appropriate
  - Selectors that pick only what is needed
- Never store server-fetched data in Zustand; use React Query.

## Error Handling, A11y, and Quality
- Implement error boundaries at appropriate levels with user-friendly fallbacks.
- Ensure accessibility: semantic HTML, ARIA where needed, keyboard support, proper labels, adequate contrast.
- Use clear, self-documenting names. Add concise JSDoc for non-obvious exported modules to explain why.
- Maintain performance with useMemo/useCallback when beneficial; consider lazy loading heavy modules.

## Commands & Tooling
- Assume pnpm as the package manager.
- Run pnpm run lint and pnpm run format before committing; code must be lint-clean and formatted.

## “Always / Never” Summary for Copilot
- Always:
  - Use TypeScript with explicit, strict types.
  - Use hooks-based components and the existing folder structure.
  - Use React Query for server data, Zustand for global client state, React Hook Form + Zod for forms.
  - Use the centralized API client and i18next for all user-visible text.
  - Use Tailwind + shadcn/ui, size-* for square elements, and RTL-aware logical properties.
- Never:
  - Use any, default exports (except Next.js route files), inline styles, or raw Axios instances.
  - Store server state in Zustand or bypass React Query.
  - Hardcode UI strings or ignore loading/error states.
  - Use w-* h-* for square elements or JS-based RTL toggles.
  - Introduce new patterns that conflict with these rules without strong justification.
