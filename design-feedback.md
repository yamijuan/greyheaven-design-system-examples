## 1. Zero orange on the page — overcorrected on "use sparingly"

The CLAUDE.md instruction "use it sparingly via bg-primary/text-primary" caused avoidance of the primary/orange color entirely. The result was a completely flat, grey page with no accent color at all.

**Why:** The word "sparingly" is too vague and creates fear of using the accent. The design system's component variants already encode the right amount of orange (small elements: badges, buttons, focus rings).

**How to apply:** Already fixed CLAUDE.md to: "Trust the design system's default component variants for accent — they apply orange at the right scale. Don't apply bg-primary to large surfaces, containers, or section backgrounds."

## 2. Pokemon type badges should use default (orange) variant, not outline

Used `variant="outline"` for Pokemon type badges across all region pages. This made the most important piece of info on each card (the type) look like secondary/muted information.

**Why:** Was trying to follow "use orange sparingly" — but type badges are exactly where the default/primary variant should be used. They're small, high-emphasis elements.

**How to apply:** Change type badges in RegionPage.tsx from `variant="outline"` to `variant="default"` (which renders as orange bg + white text). Reserve `outline` for supplementary/less important tags.

## 3. NavbarLink active state should be orange text, no background

Implemented active nav links as `text-foreground font-semibold bg-accent` (dark bold text on grey background). User expects active = `text-primary` (orange text) with no background.

Two issues:
- **My mistake**: Added `bg-accent` background on the active state — should be removed.
- **Design system gap**: The NavbarLink component's active state uses `data-[active]:text-foreground` instead of `data-[active]:text-primary`. The active navigation state should use the primary/accent color to clearly indicate the current page.

**How to apply:** In AppNavbarLink, change active styles to `text-primary font-semibold` (no bg-accent). Also consider updating the design system's NavbarLink active state to use `text-primary` instead of `text-foreground`.

## 4. bg-primary/5 accent section reads as purple, not orange

The mythical Pokemon section uses `variant="accent"` → `bg-primary/5` (orange at 5% opacity). At such low opacity over a light grey background, the orange tint is perceptually ambiguous — it can read as mauve/purple rather than orange.

**How to apply:** Consider whether `bg-primary/5` is too subtle for the accent section variant. A slightly higher value (e.g., `/8` or `/10`) or a dedicated semantic token for accent surfaces might make the intent clearer.

## 5. Section `highlighted` variant invisible in light mode

The `highlighted` variant uses `bg-muted`, but in light mode `--muted` and `--background` are the same value (`240 240 236`). The section has zero contrast against the page background — it's only visible in dark mode where the tokens diverge.

**Why:** The intent of `highlighted` is to visually distinguish a section from the default background. Using `bg-card` (off-white `249 249 247`) provides the subtle "elevated surface" contrast in light mode, and still works in dark mode since `card` maps to `47 47 44`.

**How to apply:** Change the Section component's `highlighted` variant from `bg-muted` to `bg-card`. This makes highlighted sections behave like card surfaces — slightly lighter than the page — giving consistent contrast in both themes.
