Read app/page.tsx, components/SiteHeader.tsx (or wherever nav lives),
app/globals.css, and app/yoga-courses/page.tsx before doing anything.

Context: The homepage is still too visually heavy despite a previous
simplification pass. We're rebuilding it to closely match the structure
of this reference site (a sister project, same design language target):
https://yogainstructor-snowy.vercel.app/

Reference site structure (study this exact pattern, adapt content to
Vedic Yoga Ashram, do NOT copy their exact text/branding):

1. Full-bleed hero image (single high-quality photo, dark overlay for
   text legibility) with:
   - Small business name/logo top-left in the nav (already have this)
   - Large headline (e.g. "Vedic Yoga Ashram" or an evocative one-liner)
   - One short subtext line (one sentence, not a paragraph) — e.g.
     something conveying: traditional yoga teacher training and retreats
     in Rishikesh
   - TWO CTA buttons side by side: a primary one (e.g. "View Courses" ->
     /yoga-courses) and a secondary outlined one (e.g. "Enquire Now" ->
     /contact-us)
   - That's it for the hero — no extra text, no philosophy blurb layered
     on top.

2. "Explore" section — a single row of exactly 3 cards, no more:
   - Card 1: Next YTTC cohort — query Supabase for the soonest upcoming
     cohort (earliest start_date where is_open_for_booking = true) joined
     to its offering, show: offering name, start_date - end_date, and
     starting price (lowest price from offering_pricing for that
     offering) if available. Link to /yoga-courses.
   - Card 2: Featured retreat — query Supabase for one offering where
     type = 'retreat' (pick the first active one), show name and a short
     one-line descriptor. Link to /retreat.
   - Card 3: Featured short course — query Supabase for one offering
     where type = 'short_course' (pick the first active one), show name
     and a short one-line descriptor. Link to /short-courses.
   - Keep each card minimal: one small label/eyebrow (e.g. "Next Batch",
     "Retreat", "Short Course"), a title, one line of supporting info,
     nothing else. No bullet lists, no dense text blocks.
   - If any of these queries return no data, show a graceful minimal
     fallback card (e.g. "New dates coming soon") rather than breaking
     the 3-card row.

3. "What our students say" — a single short section:
   - If a testimonials table/data doesn't exist yet, show a simple one-
     line placeholder: "Testimonials coming soon." (matching the
     reference site's exact minimal approach for now) rather than
     building fake testimonial content.

4. "Have a question?" closing CTA section:
   - One short line (e.g. "Get in touch and we'll get back to you within
     24 hours.")
   - One button: "Send an Enquiry" -> /contact-us
   - Contact info line below in small text: placeholder email/phone
     (reuse whatever placeholders already exist elsewhere in the project
     — don't invent new ones)

5. Footer:
   - Simple, minimal: business name, contact line, social icon links
     (Instagram at minimum, matching what's referenced elsewhere in the
     project; Facebook/YouTube can be placeholder "#" links)
   - No large multi-column footer with repeated nav links — keep it to
     one clean line/row.

REMOVE from the current homepage entirely (these move to their own pages,
which either already exist or will be built separately): the About
blurb, the FAQ accordion (move this to /about if not already there —
check first, and if it's only on the homepage currently, relocate it
rather than deleting the content), the amenities section, and any full
grids of short courses/retreats/programs beyond the single featured card
each in the Explore section above.

Styling: full-bleed hero using next/image with `fill` and object-cover,
dark gradient overlay for text contrast (check if a hero image already
exists from earlier work — reuse it, just adjust the layout/overlay
treatment to match this leaner structure rather than sourcing a new
one unless the existing one doesn't work well full-bleed). Keep the
saffron/amber accent for CTA buttons only. Generous whitespace. Mobile-
first responsive — hero text and buttons should stack/resize cleanly on
narrow screens.

Do NOT touch Supabase table schemas, payment/booking logic, or any page
other than app/page.tsx (and app/about/page.tsx ONLY if you need to move
the FAQ content there — check if About already has its own FAQ or content
before adding, to avoid duplication).

After building:
1. Run typecheck, lint, and a production build to confirm it compiles
   cleanly.
2. Run the dev server, check http://localhost:3000/ on both desktop and
   mobile widths, and confirm the page is now visibly much shorter/
   leaner — roughly hero + 3-card row + testimonial line + CTA + footer,
   nothing more.
3. In your summary: confirm what happened to the FAQ content (moved to
   /about, or still needs manual relocation), list what the 3 Explore
   cards are currently showing (real data vs. fallback), and flag if the
   existing hero image works well full-bleed or needs a different one.
