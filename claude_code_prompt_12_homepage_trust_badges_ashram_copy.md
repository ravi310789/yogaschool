Read app/page.tsx and app/globals.css before doing anything — this is a
small refinement pass on the already-rebuilt lean homepage (hero + 3-card
Explore row + testimonials placeholder + CTA + footer). Do not restructure
anything else; this is three focused changes only.

CHANGE 1 — Add a trust badge row under the hero
Add a single thin row of exactly 3 short credibility badges, positioned
right below the hero section (above the "Explore" 3-card row). Keep this
extremely lightweight — small icon or text label only, no cards, no
background boxes, just a simple horizontal row (stacked on mobile) with
subtle dividers or spacing between them. Suggested badges (adjust wording
to fit naturally):
  - "Yoga Alliance Certified Courses"
  - "Traditional Rishikesh Lineage"
  - "Small Group, Personal Guidance"
Use small icons if lucide-react is already available in the project
(check package.json first); otherwise text-only is fine. Keep font size
small/understated — this is a trust signal, not a headline. Do not add
a background color block behind this row; let it sit on the same
background as the hero/page for minimal visual weight.

CHANGE 2 — Update the hero subtext copy
Find the current hero subtext line (something like "Traditional yoga
teacher training in Rishikesh" or similar) and rewrite it to evoke an
ashram/spiritual retreat feeling rather than reading like a generic
training-course tagline. Aim for warmth and place-rootedness rather than
a corporate education pitch. Example direction (rewrite in your own
words, don't copy verbatim):
  "A living ashram on the banks of the Ganga — where ancient teachings
  meet daily practice in Rishikesh."
Keep it to one sentence, matching the existing hero's brevity. Do not
change the main headline itself unless it's also generic — if the
headline already says something ashram-appropriate (e.g. "Vedic Yoga
Ashram" or similar), leave it as-is and only update the subtext line.

CHANGE 3 — Replace the hero image
Replace the current hero placeholder image with a different Unsplash
placeholder that depicts yoga practice on or near a riverside ghat
(stone steps leading to a river, associated with Rishikesh/Ganga
imagery) rather than a generic yoga studio photo. Search for and use an
Unsplash photo URL depicting yoga/meditation practice by a river, ghat
steps, or Ganga-adjacent scenery. Keep the same dark gradient overlay
treatment already in place for text legibility. Keep the existing
placeholder comment marking this as temporary and needing a real ashram
photo before launch — just swap which placeholder image is used.

General requirements:
- Do NOT touch the Explore section's Supabase queries, testimonials
  section, closing CTA, footer, or any other page.
- Match existing Tailwind/spacing/accent-color conventions already
  established on this page.
- Mobile-first responsive — confirm the trust badge row stacks cleanly
  on narrow screens rather than overflowing or wrapping awkwardly.

After making changes:
1. Run typecheck, lint, and a production build to confirm it compiles
   cleanly.
2. Verify http://localhost:3000/ on both desktop and mobile widths —
   confirm the trust badge row reads as lightweight (not adding
   noticeable visual weight), the new subtext feels warmer/more
   ashram-like, and the new hero image renders correctly with good text
   contrast against the overlay.
3. In your summary: show me the exact new subtext copy you used, the
   3 trust badges as worded, and the Unsplash image URL/description you
   chose for the hero, so I can confirm all three before considering this
   done.
