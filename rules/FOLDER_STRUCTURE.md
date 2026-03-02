# Folder Structure

Modern flat structure following 2026 shadcn best practices.

## Overview
Files are organized by type (not by feature) for better scalability and maintainability.

```
src/
├── app/              # App initialization & routing
├── components/       # All React components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── services/         # API services
├── lib/              # Utilities, helpers, configs
├── types/            # TypeScript types
├── validators/       # Zod schemas
├── constants/        # App constants
├── stores/           # Zustand stores
└── i18n/             # Internationalization
```

## Directory Details

### app/
- providers.tsx - React providers (Query, Auth)
- routes.tsx - Route definitions

### components/
- ui/ - shadcn base components
- shared/ - Shared business components
- layout/ - Layout components (navbar, sidebar)
- auth/ - Auth-specific components
- mandate/ - Mandate-specific components

### pages/
- auth/ - Auth pages (SignIn)
- mandate/ - Mandate pages (AllMandates, CreateMandate, MandateDetails)
- Dashboard.tsx - Dashboard page

### hooks/
- Custom hooks (e.g., use-mandates.ts, use-mandate-constants.ts)

### services/
- api-client.ts - Base API client
- mandate-api.ts - Mandate API functions
- auth-service.ts - Auth API functions
- debtor.ts - Debtor API functions

### lib/
- auth/ - Auth logic & utilities
- utils/ - Utility functions (iban, lang, schedule, status)
- mappers/ - Data mappers
- utils.ts - General utilities (cn, etc.)

### types/
- All TypeScript type definitions (no .types suffix)

### validators/
- Zod validation schemas

### constants/
- App-wide constants

### stores/
- Zustand state management stores

## Naming Conventions

### Files
- Use kebab-case: use-mandates.ts, create-mandate-schema.ts
- No suffixes: mandate.ts (not mandate.types.ts)
- No barrel imports: Direct imports only

### Components
- PascalCase: CreateMandateForm.tsx
- No "Page" suffix: Dashboard.tsx (not DashboardPage.tsx)

### Imports
```ts
// Good - Direct imports
import { CreateMandateForm } from "@/components/mandate/CreateMandateForm/CreateMandateForm";
import { mandateApi } from "@/services/mandate-api";
import type { Mandate } from "@/types/mandate";

// Bad - Barrel imports
import { CreateMandateForm } from "@/features/mandate";
```

## Key Principles
1. Flat structure - Organize by type, not by feature
2. Direct imports - No barrel imports (index.ts files)
3. Clean naming - No redundant suffixes (.api, .types, .context)
4. Clear separation - Each directory has a single purpose
5. Domain grouping - Related items grouped (e.g., components/mandate/)

## Examples

### Adding a New Feature
1. Component: src/components/feature-name/ComponentName.tsx
2. Page: src/pages/feature-name/PageName.tsx
3. Hook: src/hooks/use-feature-name.ts
4. Service: src/services/feature-name-api.ts
5. Types: src/types/feature-name.ts
6. Validator: src/validators/feature-name-schema.ts

### Finding Files
- Looking for a component? → components/
- Looking for an API call? → services/
- Looking for a type? → types/
- Looking for a hook? → hooks/

