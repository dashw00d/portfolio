# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js dev server with fast refresh at http://localhost:3000
- **Production build**: `npm run build` - Creates static export in `out/` directory
- **Production preview**: `npm run start` - Serves the optimized build locally
- **Linting**: `npm run lint` - Runs Next.js ESLint rules

## Architecture Overview

This is a **statically-exported Next.js 14 portfolio site** configured for deployment to any static host. The site uses:

- **Static export mode** (`output: 'export'` in next.config.js) - No server-side features
- **Component-based architecture** - All UI sections are independent components
- **CSS-in-JS theming** - Semantic color tokens defined as CSS variables, surfaced through Tailwind

### Page Structure

The main landing page (`pages/index.tsx`) composes sections in this order:
1. Navigation
2. Hero
3. Problems (problem/solution section)
4. Services
5. Process (how we work)
6. Examples (case studies)
7. Contact
8. Footer

Each section is a self-contained component in `/components/`.

### Theming System

The site uses a **semantic color token system** instead of hardcoded colors:

- **Color tokens**: `brand`, `accent`, `highlight`, `success`, `warning`, `danger`
- **Definition**: RGB values in CSS variables in `styles/globals.css` (`:root`)
- **Usage**: Tailwind classes like `bg-brand-600`, `text-success-500`
- **To change theme**: Edit RGB values in `:root` without touching component code

The `tailwind.config.js` uses a `withOpacityValue` helper to map CSS variables to Tailwind with opacity support.

### Path Aliases

TypeScript is configured with `@/*` alias pointing to root (tsconfig.json):
```typescript
import Component from '@/components/Component'
```

## Code Style

- **TypeScript required** for all new modules
- **2-space indentation** (default in repo)
- **Component naming**: PascalCase (e.g. `Hero.tsx`)
- **Hook naming**: camelCase (e.g. `useViewport`)
- **Import sorting**: By path depth
- **Tailwind classes**: Group semantically (layout → spacing → typography)
- **Shared styles**: Promote verbose utility combinations to reusable classes in `globals.css`

## Static Export Notes

- Images use `unoptimized: true` (no Next.js Image Optimization)
- No server-side rendering or API routes
- `out/` directory contains build artifacts - never edit directly
- Asset prefix is relative (`./`) in production for flexibility

## Content Updates

- **Contact info**: Edit `components/Contact.tsx`
- **Services**: Edit `components/Services.tsx`
- **Meta tags**: Update in `pages/index.tsx` `<Head>` section
- **New sections**: Create component in `/components/`, import in `pages/index.tsx`
