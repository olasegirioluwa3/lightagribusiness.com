# Light Agribusiness Web Platform — Project Architecture & Standards

This document describes the codebase architecture, folder structure, design system tokens, and development standards for the **Light Agribusiness Consultancy Limited** web platform.

---

## 1. Directory Tree & Responsibilities

```text
light-agribusiness/
├── .agents/                        # AI Customizations & Guidelines
│   └── rules/
│       ├── brand-manual.md         # Overarching Brand Strategy Blueprint
│       ├── brand-manual-part1.md   # Foundation & Strategic Positioning
│       ├── brand-manual-part2.md   # Messaging, Monetization, Marketing & Identity
│       └── brand-manual-part3.md   # Culture, Technology, Growth & Governance
│
├── app/                            # Next.js App Router (Public Site Architecture)
│   ├── layout.tsx                  # Global root layout (Fonts, Meta, Navbar, Footer)
│   ├── globals.css                 # Theme variables, parchment base, utilities
│   ├── page.tsx                    # Institutional Homepage (Flywheel, Master Message)
│   │
│   ├── academy/                    # Pillar 1: Knowledge & Capacity Development
│   │   ├── page.tsx                # Course catalogue, certifications, SIWES
│   │   └── [slug]/page.tsx         # Detailed course/curriculum page
│   │
│   ├── advisory/                   # Pillar 2: Advisory & Business Systems
│   │   ├── page.tsx                # 5D Framework, Farm Diagnostics, SOPs, Case Studies
│   │   └── request-diagnostic/page.tsx # Scoped diagnostic intake form
│   │
│   ├── lightagrios/                # Pillar 3: Technology Platform (LightAgriOS)
│   │   ├── page.tsx                # Farm OS modules, tiered pricing, interactive demo
│   │   └── waitlist/page.tsx       # Early access / demo signup
│   │
│   ├── insights/                   # Research, SEO Engine & Publications (Sec. 35)
│   │   ├── page.tsx                # State of African Agribusiness Report, SOP kits
│   │   └── [slug]/page.tsx         # Individual article or whitepaper
│   │
│   ├── about/                      # About Light (Company Story, 5 Beliefs, Sage-Creator)
│   │   └── page.tsx
│   │
│   ├── partnerships/               # Institutional Engagements (Universities, DFIs, NGOs)
│   │   └── page.tsx
│   │
│   └── contact/                    # Direct inquiries & advisory bookings
│       └── page.tsx
│
├── components/                     # Modular React Components
│   ├── layout/                     # Global navigation & shell
│   │   ├── Navbar.tsx              # Institutional navigation with 3-pillar quick-nav
│   │   └── Footer.tsx              # Comprehensive footer with master message & links
│   │
│   ├── ui/                         # Brand Design System primitives
│   │   ├── Button.tsx              # Brand buttons (Primary Gold/Green, Outline, Ghost)
│   │   ├── Card.tsx                # Warm Parchment elevated cards with subtle borders
│   │   ├── Badge.tsx               # Pillar badges (Academy, Advisory, LightAgriOS)
│   │   ├── SectionHeader.tsx       # Serif headline + pillar tag + radiating accent
│   │   └── Container.tsx           # Standard centered responsive container
│   │
│   ├── home/                       # Homepage modular sections
│   │   ├── Hero.tsx                # Master message, dual CTAs, light ray geometry
│   │   ├── ThreePillarsSection.tsx # Integrated 3-pillar flywheel showcase
│   │   ├── PersonaPathways.tsx     # Audience selector (Students, Farmers, Corporates)
│   │   ├── GoverningBeliefs.tsx    # Five Governing Beliefs showcase
│   │   └── DiagnosticCTA.tsx       # High-leverage diagnostic + LightAgriOS bundle CTA
│   │
│   ├── academy/                    # Dedicated Academy components
│   ├── advisory/                   # Dedicated Advisory components (5D Framework, etc.)
│   ├── lightagrios/                # Dedicated LightAgriOS components (Pricing matrix)
│   └── shared/                     # Cross-cutting widgets (Testimonials, FAQs)
│
├── data/                           # Single Source of Truth Static Data
│   ├── navigation.ts               # Header & footer menus
│   ├── pillars.ts                  # Pillar definitions, offers, and value propositions
│   ├── personas.ts                 # Audience messaging matrix
│   ├── courses.ts                  # Academy course catalogue and certification tiers
│   └── advisory.ts                 # Advisory packages and diagnostic specifications
│
├── types/                          # TypeScript Interfaces & Types
│   └── index.ts                    # Global type declarations
│
├── documentation/                  # Original brand manual docx files & architectural docs
│   ├── PROJECT_STRUCTURE.md        # This file
│   ├── Light_Agribusiness_Brand_Manual.docx
│   ├── Light_Agribusiness_Brand_Manual_Part1.docx
│   ├── Light_Agribusiness_Brand_Manual_Part2.docx
│   └── Light_Agribusiness_Brand_Manual_Part3.docx
│
├── tailwind.config.ts              # Tailwind CSS configuration with brand tokens
└── tsconfig.json                   # TypeScript configuration
```

---

## 2. Design System & Brand Tokens

### Color Palette

| Token | Hex Code | Usage |
|---|---|---|
| `growth-green` | `#1F5C3F` | Primary brand anchor, buttons, institutional accents |
| `growth-green-dark` | `#15402C` | Deep contrast, dark hover states, footer headers |
| `illumination-gold` | `#C69214` | Brand accent, "Light" metaphor, primary CTAs, highlight badges |
| `illumination-gold-light` | `#E0AB2D` | Hover states, glowing accents |
| `warm-parchment` | `#F4F1E8` | Base background, card fills (avoids stark sterile white) |
| `charcoal` | `#222222` | Primary high-contrast body and heading text |
| `slate-grey` | `#5A5A5A` | Secondary text, subtitles, metadata, borders |

### Sub-brand Pillar Colors
- **Academy**: Warmer amber-orange (`#D97706`)
- **Advisory**: Muted deep navy (`#1E293B`)
- **LightAgriOS**: Modern teal / electric-gold (`#0D9488` / `#EAB308`)

### Typography
- **Headings & Wordmarks**: Serif (`font-serif` — Merriweather / Georgia) — embodies institutional gravitas and the *Sage* archetype.
- **Body & UI**: Sans-Serif (`font-sans` — Inter / system-ui) — highly legible for mobile users across Africa.

---

## 3. Key Brand Architecture Rules
1. **Pillars as a Flywheel**: Academy (Capacity) $\rightarrow$ Advisory (Systems) $\rightarrow$ LightAgriOS (Technology). Cross-pillar conversion is the central metric.
2. **Naming Convention**:
   - Always write: **LightAgriOS** (one word, capital A-g-r-i-O-S).
   - Pillar names: *Light Agribusiness Academy*, *Light Advisory*, *LightAgriOS*.
3. **Promise-Keeping**:
   - Every advisory engagement leads with the 5D framework (**Diagnose $\rightarrow$ Design $\rightarrow$ Document $\rightarrow$ Deploy $\rightarrow$ Sustain**).
   - High-leverage bundle: Farm Diagnostic packaged with 6–12 months of LightAgriOS.
