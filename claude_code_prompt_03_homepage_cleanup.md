Read app/page.tsx and app/globals.css before doing anything — this is a
visual/structural refinement of the existing homepage, not a new feature
and not a data/logic change.

Context: The homepage currently has hero, philosophy blurb, YTTC courses,
short courses, retreats, programs, about, amenities, FAQ, and contact/CTA
sections, all stacked in sequence. It works and builds cleanly, but it
feels visually heavy/dense as a first impression.

Task: Make the homepage feel lighter and cleaner WITHOUT removing any
Supabase data-fetching logic or functionality — this is a styling and
information-density pass only.

Specific changes to make:

1. INCREASE WHITESPACE
   - More generous vertical padding between sections (Tailwind spacing
     scale — think py-20/py-24 on desktop rather than tight py-8/py-12).
   - More breathing room around text blocks; avoid cramming multiple
     dense text blocks close together.

2. REDUCE VISUAL COMPETITION
   - Don't give every section equal visual weight. The hero and the YTTC
     courses section (the primary conversion driver) should feel most
     prominent. Short courses, retreats, and programs should read as
     lighter/simpler card grids or lists — not full sections with the
     same heavy styling as the hero.
   - Pull back on the saffron/amber accent color usage — use it
     purposefully (e.g. CTA buttons, one accent line/badge per section)
     rather than repeated backgrounds or borders in every section.

3. SIMPLIFY EACH SECTION'S INTERNAL LAYOUT
   - For sections rendering Supabase data (YTTC, short courses, retreats,
     programs): use a clean, consistent card component (consider
     extracting a shared <OfferingCard /> component if one doesn't exist,
     to reduce repeated markup and keep styling consistent). Keep cards
     minimal — name, one line of key info, one CTA link. Avoid dense
     bullet lists or multiple nested boxes within a card.
   - Consider limiting the number of cards shown per section on the
     homepage (e.g. show 3-4 featured items with a "View All" link to a
     fuller listing page) rather than dumping every record into the
     homepage.

4. TYPOGRAPHY HIERARCHY
   - Ensure clear size/weight differentiation between hero headline,
     section headings, and body text — check that everything doesn't
     look like the same font-size/weight, which contributes to visual
     heaviness.
   - Consider a slightly restrained max-width on text blocks (e.g.
     max-w-2xl or max-w-3xl) rather than full-width paragraphs, for
     readability.

5. FAQ SECTION
   - If not already a collapsible accordion, make it one (only one
     question's answer visible at a time, or all collapsed by default) —
     this alone significantly reduces perceived page length/density.

6. DO NOT:
   - Remove any Supabase queries or data-driven sections.
   - Change the accent color choice itself (saffron/amber stays) — just
     use it more sparingly.
   - Touch next.config.ts, the Supabase client, or any non-homepage file.
   - Change placeholder content (hero image, contact info) — those stay
     as-is until real values are provided.

After making changes:
1. Run typecheck, lint, and a production build to confirm everything
   still compiles cleanly.
2. Run the dev server and verify http://localhost:3000/ visually — take
   a screenshot if that's useful for your own verification (installing
   Playwright temporarily and uninstalling it after, if you do).
3. In your summary, describe specifically what changed to reduce visual
   weight (e.g. spacing changes, card simplification, accordion FAQ,
   reduced color usage) so I can review the reasoning, not just "made it
   cleaner."
