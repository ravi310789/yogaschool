Read CLAUDE.md and AGENTS.md (if present), package.json, tsconfig.json,
app/courses/page.tsx, lib/supabase/client.ts, and app/globals.css before
doing anything — this task should match the conventions already
established in the courses page (Supabase query patterns, Tailwind usage,
any existing color palette or design tokens).

Context: This is a Next.js 16 App Router site for Vedic Yoga Ashram, a
yoga school and retreat center in Rishikesh, India. It replicates and
enhances vedicyogaashram.com. Supabase (offerings, offering_pricing,
cohorts tables) is already connected and working — the /courses page
successfully renders live YTTC pricing data.

Task: Build the homepage at app/page.tsx.

Reference content and structure (adapt/rewrite copy as needed, don't
copy verbatim from the source site — write original copy that conveys
the same information):

1. HERO SECTION
   - Headline: something evoking "Awaken Your Inner Light Through the
     Wisdom of Vedic Hatha Vinyasa Yoga" — traditional teachings, modern
     guidance, in Rishikesh.
   - Subheading mentioning Rishikesh / traditional Hatha Vinyasa yoga.
   - A prominent CTA button "Enquire Now" or "Book Now" (link to /courses
     for now, since the booking flow doesn't exist yet).
   - Hero image: use a placeholder from Unsplash (a yoga/Rishikesh/ashram
     themed photo) since there's no real photo yet. Clearly comment in
     the code that this is a placeholder and MUST be replaced with a real
     photo before launch. Add images.unsplash.com to next.config.ts's
     images.remotePatterns if not already present, with a comment that
     this should be removed once real images are hosted properly (likely
     Supabase Storage).

2. INTRO / PHILOSOPHY BLURB
   - A short 2-3 sentence section about yoga as a way of living — balance,
     compassion, growth, going beyond the physical.

3. FEATURED YTTC COURSES (live data)
   - Query Supabase for offerings where type = 'yttc' and is_active =
     true, joined with offering_pricing, same pattern as the /courses
     page. Show a condensed card per course (name, duration, starting
     price) with a "View Details" link to /courses (since individual
     detail pages don't exist yet — link there for now).

4. SHORT COURSES SECTION
   - Query Supabase for offerings where type = 'short_course'. Since these
     don't have pricing yet, just show name + a "Know More" link (link to
     /courses as a placeholder destination for now).

5. RETREATS SECTION
   - Briefly showcase Yoga & Meditation Retreats and Ayurveda Retreats.
     Query Supabase for offerings where type in ('retreat',
     'ayurveda_retreat'). Show name + duration_label style info if
     available, otherwise just name + short description.

6. PROGRAMS SECTION
   - Query offerings where type = 'program'. Show as a simple grid of
     program names + descriptions (weight loss, PCOS, arthritis, etc. —
     use whatever is actually in the database).

7. ABOUT SECTION
   - Short "About Us" blurb: located in Tapovan, Rishikesh; led by
     traditional Indian yogis; welcomes students from around the world.
     (Original copy, not copied verbatim from any source.)

8. AMENITIES SECTION
   - A simple two-column or grid list of amenities: Wi-Fi, laundry
     service, yoga hall, library, rooftop with mountain view, 24-hour hot
     water, study material, free yoga equipment, 3 vegetarian meals daily,
     cultural program. (This can be static content, no DB table needed
     for Phase 1.)

9. FAQ SECTION
   - A simple accordion or list with 4 FAQs, e.g.: "Do I need prior yoga
     experience?", "Is the school Yoga Alliance registered?", "Is food
     included in the course fee?", "Can I attend as a non-teaching
     student?" — write natural, original answers.

10. CONTACT / CTA SECTION
    - A closing section with a CTA to enquire, and placeholder contact
      info (email, phone, WhatsApp) — mark clearly as placeholder text if
      you don't have real values, and ask me to confirm the actual contact
      details afterward.

General requirements:
- Use Tailwind CSS throughout, consistent with the existing project
  styling (check globals.css for any established accent color / design
  tokens from earlier work; if none exist yet, choose one intentional
  accent color — e.g. a warm terracotta or saffron tone fitting a yoga/
  ashram brand — and note your choice and reasoning in your summary).
- Fully responsive, mobile-first (most traffic comes from Instagram bio
  links on mobile).
- Use Server Components for all Supabase data fetching (no client-side
  fetching needed for this static-ish content).
- Handle empty/error states gracefully for every Supabase query (e.g. if
  a category has no offerings yet, don't render a broken empty section).
- Do NOT touch payment, booking form, or Razorpay code — none of that
  exists yet and is out of scope for this task.
- Do NOT modify the /courses page — only read it for pattern reference.

After building:
1. Run typecheck, lint, and a production build to confirm everything
   compiles cleanly.
2. Run the dev server and check http://localhost:3000/ actually renders
   correctly (installing Playwright temporarily to screenshot it if
   useful for your own verification, then uninstalling it afterward if
   you do).
3. In your summary, clearly list: (a) every placeholder that still needs
   real content (hero image, contact info, any others), (b) the accent
   color chosen and why, and (c) which Supabase-backed sections rendered
   real data vs. which showed empty states because the category has no
   seeded content yet.
