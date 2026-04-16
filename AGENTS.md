# Project Instructions

> **Auto-generated** by the Greyhaven Design System.
> Re-generate: `pnpm skill:build` in the design system repo.
>
> Copy this file to your project root as `AGENTS.md` (standard), `CLAUDE.md`,
> `.cursorrules`, or `.github/copilot-instructions.md` depending on your AI tool.

This project uses the **Greyhaven Design System**.

## Rules

- **ALWAYS use TypeScript** (`.tsx` / `.ts`). NEVER generate plain JavaScript (`.jsx` / `.js`).
- Use the `greyhaven` SKILL.md for full design system context (tokens, components, composition rules). It should be installed at `.claude/skills/greyhaven-design-system.md` or accessible to your AI tool.
- If the `greyhaven` MCP server is available, use its tools:
  - `list_components()` to find the right component for a UI need
  - `get_component(name)` to get exact props, variants, and usage examples
  - `validate_colors(code)` to check code for off-brand colors
  - `suggest_component(description)` to get recommendations
- Import components from `components/ui/` (or `@/components/ui/` with path alias)
- Never use raw hex colors -- use semantic Tailwind classes (`bg-primary`, `text-foreground`, `border-border`, etc.)
- Use `font-sans` (Aspekta) for UI elements: buttons, nav, labels, forms
- Use `font-serif` (Source Serif) for content: headings, body text
- Trust the design system's default component variants for accent -- they apply orange at the right scale. Don't apply `bg-primary` to large surfaces, containers, or section backgrounds
- All components are framework-agnostic React (no Next.js, no framework-specific imports)
- Dark mode is toggled via the `.dark` class -- use semantic tokens that adapt automatically

## Component Summary

38 components across 8 categories: primitives (11), layout (4), overlay (5), navigation (3), data (4), feedback (4), form (1), composition (6).

For full component specs, props, and examples, refer to the SKILL.md file or use the MCP `get_component(name)` tool.

## Key Patterns

- **CVA variants**: Components use `class-variance-authority` for variant props
- **Slot composition**: Components use `data-slot="name"` attributes
- **Class merging**: Always use `cn()` from `@/lib/utils` (clsx + tailwind-merge)
- **Focus rings**: `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- **Disabled**: `disabled:pointer-events-none disabled:opacity-50`
- **Card spacing**: `gap-6` between cards, `p-6` internal padding
- **Section rhythm**: `py-16` between major sections
- **Form layout**: Vertical stack with `gap-4`, labels above inputs

## Font Setup

If fonts aren't loaded yet, add to your global CSS:
```css
@font-face { font-family: 'Aspekta'; font-weight: 400; font-display: swap; src: url('/fonts/Aspekta-400.woff2') format('woff2'); }
@font-face { font-family: 'Aspekta'; font-weight: 500; font-display: swap; src: url('/fonts/Aspekta-500.woff2') format('woff2'); }
@font-face { font-family: 'Aspekta'; font-weight: 600; font-display: swap; src: url('/fonts/Aspekta-600.woff2') format('woff2'); }
@font-face { font-family: 'Aspekta'; font-weight: 700; font-display: swap; src: url('/fonts/Aspekta-700.woff2') format('woff2'); }
```

---

## Brand Voice and Messaging

This project generates user-facing content (marketing copy, CTAs, landing pages, product explanations, emails) and MUST follow the Greyhaven brand voice.

### Brand Rules

- **Before writing any user-facing copy**, read the brand skill:
  - Claude Code / compatible tools: `.claude/skills/greyhaven-brand.md` (full voice/tone/messaging reference)
  - Or via MCP: call `get_brand_rules()` (or a specific section: `positioning`, `axes`, `tone`, `writing-rules`, `reasoning-patterns`, `cta`, `logo`, `self-check`)
- **Before shipping any user-facing copy**, validate it:
  - Via MCP: call `validate_copy(text)` to lint for hype words, vague superlatives, urgency framing, and exclamation marks
  - Or manually run the 8-item self-check list from the brand skill

### Core Voice (memorize)

- **Direct. Plain-spoken technical.** Write like an engineer who explains systems cleanly, without mystique or theatrics.
- **No** hype adjectives (`revolutionary`, `cutting-edge`, `seamless`, `game-changing`, `powerful`).
- **No** evangelism verbs (`unleash`, `transform`, `empower`, `supercharge`, `unlock`).
- **No** sales language, urgency framing, exclamation marks.
- **No** jargon for its own sake. Prefer plain words: "where the data goes" over "data paths"; "things the system relies on" over "dependencies".
- **Yes** specifics, causal reasoning, concrete outcomes.

### The Three Brand Axes

Copy must land on the correct side of each:
1. **Containment** — systems run inside the perimeter, nothing leaks (not cloud/SaaS narratives)
2. **Human-centered** — built around how people actually work (not around model capabilities)
3. **Engineered** — from real deployments and constraints (not vision-first, theatrical, speculative)

### Reasoning Patterns to Use

Structure explanations as:
- **Cause → Effect**
- **Constraint → Outcome**
- **Observation → Explanation**
- **Finite Scope → Concrete Result**

### CTA Guidance

- **Good**: "Map your first process", "See how it runs in your environment", "Review the architecture", "Get a working prototype in 48 hours"
- **Avoid**: "Unleash the power of AI", "Transform your business", "Don't miss out!", "Get started today!"

### Logo Usage

Logos live in `public/logos/` after install. See the brand skill for the full rules (clearspace, minimum sizes, what to avoid).

- **Full logo** (symbol + wordmark): `gh-logo-positive-full-black.svg` (light bg), `gh-logo-white.svg` (dark bg), `gh-logo-offblack.svg` (warm-neutral)
- **Symbol only**: `gh-symbol-full-black.svg`, `gh-symbol-full-white.svg` — only when Greyhaven recognition is already established
- **Product lockups**: `greyproxy-positive.svg`, `greywall-positive.svg`
- **Never**: change opacity, apply new colors, stretch, rotate, apply gradients/shadows, alter the symbol-to-wordmark ratio

### One-Line Test

Before writing a sentence, ask: *Would an engineer who understands the system read this and feel it's accurate, direct, and free of hype?* If not, rewrite.
