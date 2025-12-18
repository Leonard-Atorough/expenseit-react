# Components Structure

This directory contains all React components for the ExpenseIt application, organized into **common** and **feature** folders for better scalability and maintainability.

## Folder Organization

### `/common`
Reusable components that are used across multiple parts of the application.

- **LandingAppBar.tsx** - Navigation bar displayed on the landing page and login page
- **ProtectedRoute.tsx** - Route wrapper that ensures only authenticated users can access protected pages

### `/features`
Feature-specific components grouped by their functional domain.

#### `/features/app`
Main application components for authenticated users.

- **Dashboard.tsx** - Overview page showing user's financial summary
- **Transactions.tsx** - Manage and view transactions
- **Reports.tsx** - Analytics and spending reports
- **Settings.tsx** - User account and preference settings

#### `/features/auth`
Authentication-related components.

- **LoginOrRegister.tsx** - Combined login and registration form

#### `/features/landing`
Landing page components for unauthenticated users.

- **Hero.tsx** - Hero section with call-to-action
- **Features.tsx** - Feature showcase section

## Importing Components

### Using barrel exports (recommended)
```typescript
import { Dashboard, Transactions } from "@/components/features/app";
import { LandingAppBar, ProtectedRoute } from "@/components/common";
import { LoginOrRegister } from "@/components/features/auth";
import { Hero, Features } from "@/components/features/landing";
```

### Direct imports
```typescript
import { Dashboard } from "@/components/features/app/Dashboard";
```

## When to Create New Components

- **In `/common`**: When a component is reused across multiple features
- **In `/features/{feature}`**: When a component belongs to a specific feature domain
- **Consider creating sub-folders**: If a feature grows with multiple related components

## Best Practices

1. Each feature folder should be self-contained
2. Use index.ts files for clean barrel exports
3. Keep components focused and single-responsibility
4. Move components to `/common` when they're needed by multiple features
