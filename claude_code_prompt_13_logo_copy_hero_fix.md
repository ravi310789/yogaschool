Read app/page.tsx, components/SiteHeader.tsx (or wherever the nav/logo
lives), app/globals.css, and next.config.ts before doing anything. This
prompt covers three focused fixes — do not restructure anything else.

CONTEXT: The user has provided a real logo image (a circular badge with a
lotus flower, a tree-pose figure silhouette, and the text "VEDIC HATHA
VINYASA YOGA ASHRAM"). This file needs to be saved into the project by
the user first — check if a file exists at public/logo.png (or
public/images/logo.png). If it does not exist yet, STOP and tell me
clearly: "Please save the logo image to public/logo.png before I can
wire it in" — do not invent a placeholder logo or skip this step
silently.

FIX 1 — Add the real logo to the site header
- Once public/logo.png exists, replace whatever currently represents the
  brand in the header/nav (text-only name, or a placeholder) with the
  actual logo image, using next/image.
- Size it appropriately for a header — small and crisp (e.g. roughly
  40-56px tall on desktop, slightly smaller on mobile), not stretched or
  distorted. Maintain the image's own aspect ratio (it's circular/square
  — use equal width and height).
- If the header currently also shows a text business name next to a logo
  placeholder, decide sensibly whether to keep text alongside the logo
  image or let the logo stand alone (the logo image already contains the
  business name as part of its design, so having redundant text next to
  it may look cluttered) — use your judgement, but favor a clean,
  uncluttered header.
- Ensure the logo is a link back to the homepage (/), consistent with
  standard site header behavior.
- Also check if a favicon exists (app/favicon.ico or similar) — if it's
  still the default Next.js favicon, note this to me but do not attempt
  to auto-generate a favicon from the logo yourself unless it's trivial
  to do (e.g. if there's already tooling in the project for it).

FIX 2 — Rewrite the hero subtext for accuracy
- The current subtext focuses narrowly on "teacher training" only. This
  ashram actually offers yoga classes, workshops, and retreats — not just
  teacher training courses. Rewrite the hero subtext (one sentence, same
  brevity as before) to reflect this broader scope while keeping the
  ashram/spiritual warmth established in the previous copy pass. Example
  direction (write your own version, don't copy verbatim):
  "Daily classes, immersive workshops, and retreats rooted in the
  traditions of Rishikesh."
- Do not change the main headline unless it's still generic — if it
  already reflects the ashram branding, leave it as-is.

FIX 3 — Fix the hero image sizing/overflow bug
- Currently the hero image is filling/covering more than the intended
  hero area, pushing page content below it out of view or hiding it
  entirely. Diagnose and fix this. Common causes to check:
  - The hero container may be missing an explicit height (e.g. using
    `h-screen` unintentionally, or no height constraint at all combined
    with next/image `fill`, causing the image's natural aspect ratio to
    expand the container unpredictably).
  - The `fill` prop on next/image requires the PARENT element to have
    `position: relative` and an explicit height (e.g. `h-[70vh]` or
    `h-[600px]` on desktop, a shorter height like `h-[420px]` on mobile)
    — confirm this is set correctically and fix if missing or
    misconfigured.
  - Check for missing `overflow-hidden` on the hero container if the
    image is a fixed aspect ratio bleeding outside its bounds.
  - Ensure content (headline, subtext, badges, CTA buttons) is
    positioned with proper z-index and absolute/relative positioning
    ON TOP of the image within the same constrained-height container,
    not pushed below it in normal document flow.
- After fixing, the hero should occupy a fixed, reasonable viewport
  height (roughly 70-90vh on desktop, less on mobile) with the image as
  a background, text/CTAs overlaid on top, and all subsequent page
  content (trust badges, Explore cards, etc.) clearly visible directly
  below the hero without needing to scroll past an oversized image first.

General requirements:
- Do NOT touch Supabase queries, the Explore section's data logic,
  testimonials, footer, or any other page.
- Match existing Tailwind/spacing/accent-color conventions.
- Test at both desktop and mobile widths specifically for Fix 3, since
  hero-height bugs often only appear at certain viewport sizes.

After making changes:
1. Run typecheck, lint, and a production build to confirm it compiles
   cleanly.
2. Run the dev server and verify http://localhost:3000/ at both desktop
   and mobile widths — confirm: (a) the logo displays correctly and links
   home, (b) the new subtext reads naturally, (c) the hero has a
   contained, reasonable height and all content below it (trust badges,
   Explore row, testimonials, CTA, footer) is fully visible without the
   image overflowing or hiding anything.
3. In your summary: confirm whether public/logo.png existed or whether
   you need me to add it, show the new subtext copy, and describe exactly
   what was wrong with the hero sizing and how you fixed it.
