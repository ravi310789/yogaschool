Read app/page.tsx, app/courses/page.tsx, app/globals.css, lib/supabase/
client.ts, and any layout/nav component (e.g. app/layout.tsx or
components/*) before doing anything.

Context: This is a Next.js 16 App Router site for Vedic Yoga Ashram. We're
restructuring from a single dense homepage into a full multi-page site,
matching this navigation (based on the original reference site's menu):

  Home | About | Gallery | Yoga Courses | Short Courses | Online Courses |
  Retreat | Blog | Contact Us

Task — this prompt covers ONLY the navigation shell and homepage
simplification. Individual page content (About, Gallery, etc.) will be
built in separate follow-up prompts, so create route folders/placeholder
pages for them but do not fully build out their content yet.

1. CREATE/UPDATE A SHARED NAVIGATION COMPONENT
   - A header/nav bar (if one doesn't already exist as a proper reusable
     component, extract it into one, e.g. components/SiteHeader.tsx) with
     links to: Home (/), About (/about), Gallery (/gallery), Yoga Courses
     (/yoga-courses), Short Courses (/short-courses), Online Courses
     (/online-courses), Retreat (/retreat), Blog (/blog), Contact Us
     (/contact-us).
   - Mobile-responsive with a working hamburger/burger menu (check for and
     fix any existing mobile nav issues if you find them).
   - Include this nav in the root layout (app/layout.tsx) so it appears on
     every page.
   - Also add a simple shared footer with the same quick links, matching
     a typical site footer pattern (contact info can stay placeholder for
     now, matching whatever placeholder values already exist).

2. CREATE ROUTE SCAFFOLDING for pages that don't exist yet:
   - app/about/page.tsx — minimal placeholder ("About page — coming soon")
   - app/gallery/page.tsx — minimal placeholder
   - app/short-courses/page.tsx — minimal placeholder
   - app/online-courses/page.tsx — minimal placeholder
   - app/retreat/page.tsx — minimal placeholder
   - app/blog/page.tsx — minimal placeholder
   - app/contact-us/page.tsx — minimal placeholder
   These will be fully built in later prompts — just make sure the routes
   exist and are linked correctly from the nav so nothing 404s.

3. RENAME/MOVE the existing course listing:
   - The current app/courses/page.tsx (which already works, showing live
     YTTC data from Supabase) should become app/yoga-courses/page.tsx to
     match the nav structure. Update any internal links that pointed to
     /courses to point to /yoga-courses instead. If anything else
     references /courses, update it.

4. SIMPLIFY THE HOMEPAGE (app/page.tsx) significantly:
   - The homepage should now be a lean landing page, NOT a page that tries
     to list every course/retreat/program in full. Keep:
     - Hero section (as-is, with existing placeholder image/CTA)
     - Short philosophy blurb
     - A brief "featured" teaser for YTTC courses (3-4 cards max) with a
       "View All Yoga Courses" link to /yoga-courses
     - A brief teaser section linking out to Short Courses, Online
       Courses, and Retreat pages (e.g. 3-4 simple link cards/tiles, not
       full content — "Explore Short Courses", "Explore Retreats", etc.)
     - Keep the About blurb short, with a "Learn More" link to /about
     - Keep the FAQ accordion (already built) — this can stay on the
       homepage
     - Keep the contact/CTA closing section, linking to /contact-us for
       the full form (which will be built later)
   - REMOVE from the homepage (since they'll have their own full pages
     now): the full short courses grid, the full retreats grid, the full
     programs grid, and the amenities section (amenities can move to
     /about in a later prompt).
   - Keep all Supabase query logic that still applies (e.g. the featured
     YTTC teaser) but simplify to fewer items shown.

5. Do NOT build out the full content for About, Gallery, Short Courses,
   Online Courses, Retreat, Blog, or Contact Us pages in this prompt —
   those are separate follow-up tasks. Placeholder pages are sufficient
   here.

6. Do NOT touch payment/booking logic — none exists yet.

After making changes:
1. Run typecheck, lint, and a production build to confirm everything
   compiles cleanly, including that all new routes exist and are
   reachable.
2. Run the dev server and click through every nav link (Home, About,
   Gallery, Yoga Courses, Short Courses, Online Courses, Retreat, Blog,
   Contact Us) to confirm none 404, and confirm the mobile hamburger menu
   opens/closes correctly.
3. In your summary, list every route now live, confirm the homepage is
   visibly shorter/leaner than before, and flag anything that still needs
   my input (e.g. real contact info, real images).
