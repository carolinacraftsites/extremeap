# Project Documentation

## Overview

**Business**: Extreme Awards & Personalization - A trophies and engraving shop in Arden, North Carolina

**Core Purpose**: Generate leads and provide information for a local business through a professional web presence.

**Technology Stack**: React + TypeScript frontend, utilizing shadcn/ui components for consistent design.

**Status**: ✅ COMPLETED

## Project Summary

A fully responsive, modern website built for Extreme Awards & Personalization featuring:
- Complete multi-page site with Home, Services, About, and Contact pages
- Mobile-first responsive design with sticky navigation and mobile menu
- Brand colors integrated throughout (#C43175, #D85637, #FAE854, #B7CC5A, #60B25D, #52ABBD, #3070B6, #654A93)
- Professional service showcases with custom icons and interactive cards
- Clear call-to-actions on every page for lead generation
- Comprehensive footer with contact information and quick links

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Client-side routing using Wouter (lightweight alternative to React Router), with four main pages:
- Home (Hero + Service Preview)
- Services (Complete service catalog)
- About (Owner profile and business information)
- Contact (Contact information display)

**UI Component System**: shadcn/ui components (Radix UI primitives) with custom Tailwind CSS styling following the "new-york" theme variant. Components are fully accessible and use CSS variables for theming.
Components styled individually with brand colors and styling for unique brand voice.

**Design System**: 
- Responsive breakpoints prioritizing mobile experience
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24)
- Typography using Inter/Poppins-style system fonts
- Elevation system using subtle shadows and backdrop effects

**State Management**: 
- Local component state using React hooks

**Rationale**: The combination of Vite + React provides fast development experience, while shadcn/ui ensures consistent, accessible components without the bundle size of full component libraries. Wouter keeps routing lightweight for a simple multi-page site.

### Backend Architecture

No backend

### Data Storage

No Data Storage

### Code Organization

**Monorepo Structure**:
- `/client` - React frontend application
- `/shared` - Shared TypeScript types and Zod schemas
- `/attached_assets` - Static assets (images)

**Path Aliases**:
- `@/` → `client/src/` (frontend imports)
- `@shared/` → `shared/` (shared schemas/types)
- `@assets/` → `attached_assets/` (static assets)

**Component Structure**: Feature-based organization with reusable UI components in `/components/ui` and page-specific components in `/pages`.

**Rationale**: Monorepo structure keeps frontend and backend together while enabling code sharing. Path aliases improve import readability and refactoring ease.

## External Dependencies

### UI Framework & Components
- **Radix UI** - Unstyled, accessible component primitives (dialogs, dropdowns, forms, etc.)
- **shadcn/ui** - Pre-styled component configurations built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for UI elements

### Development Tools
- **Vite** - Frontend build tool and dev server
- **TypeScript** - Type safety across the stack
- **esbuild** - Fast JavaScript bundler for production backend builds
- **tsx** - TypeScript execution for development server

### Routing & Navigation
- **Wouter** - Lightweight client-side routing library

### SEO & Meta Tags
- **React Helmet Async** - Manages document head for SEO optimization

### Styling Utilities
- **class-variance-authority** - Type-safe variant management for components
- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind class merging

### Additional Utilities
- **date-fns** - Date manipulation library
- **nanoid** - Unique ID generation
- **cmdk** - Command menu component infrastructure
- **embla-carousel-react** - Carousel component support
- **vaul** - Drawer component library

**Integration Notes**: 
- Font loading via Google Fonts CDN (configured in index.html)
- Hero image and other assets expected in `/attached_assets/generated_images/`