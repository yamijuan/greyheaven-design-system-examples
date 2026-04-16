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
