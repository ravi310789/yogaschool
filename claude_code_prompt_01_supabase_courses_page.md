Read CLAUDE.md and AGENTS.md (if present) before doing anything, along with
package.json and tsconfig.json to confirm the import alias convention (e.g.
"@/*") and existing project structure. This project is a Next.js 16 App
Router app (TypeScript strict mode, Tailwind CSS), deploying to Cloudflare
Workers via vinext. It replicates and enhances vedicyogaashram.com.

Context: Supabase (Postgres) is already set up with these tables, RLS
enabled, and public read-only policies. They are already seeded with real
data.

offerings:
  id (uuid), slug (text, unique), name (text),
  type (text: 'yttc' | 'short_course' | 'retreat' | 'ayurveda_retreat' |
        'online_course' | 'program'),
  description (text, nullable), is_active (boolean)

offering_pricing:
  id (uuid), offering_id (fk -> offerings),
  accommodation_type (text: 'private' | 'shared_2' | 'shared_3' | 'dorm' |
        'not_applicable'),
  duration_label (text), price (numeric), currency (text),
  deposit_percent (numeric)

cohorts:
  id (uuid), offering_id (fk -> offerings), start_date (date),
  end_date (date, nullable), is_open_for_booking (boolean),
  capacity (integer, nullable)

Task — set up the Supabase connection and build the first live data page:

1. Install @supabase/supabase-js if not already a dependency.

2. Create a Supabase browser client at lib/supabase/client.ts using
   NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from
   environment variables. Follow whatever project convention already
   exists for env var access (check for an existing lib/supabase folder
   or config pattern first — do not duplicate if something already
   exists).

3. Check if .env.local exists with those two variables defined. If not,
   create it with empty placeholders and clearly tell me (in your final
   summary) to fill them in from Supabase Project Settings -> API. Do not
   invent placeholder values that look real.

4. Generate or hand-write a TypeScript types file (e.g.
   lib/supabase/database.types.ts) reflecting the three tables above, so
   queries are type-safe. If the Supabase CLI is available and configured,
   prefer generating this properly; otherwise hand-write minimal types
   matching the schema above.

5. Create a page at app/courses/page.tsx as an async Server Component. It
   should query Supabase for all offerings where type = 'yttc' and
   is_active = true, joined with their offering_pricing rows (ordered
   sensibly, e.g. by price ascending within each course), and render:
   - Course name and description
   - A clear pricing table/list per course: duration_label,
     accommodation_type (displayed in a human-readable label, e.g.
     "shared_2" -> "Shared Room"), price, currency
   - Handle and display the loading/error/empty states gracefully (e.g.
     no courses found, Supabase query error)

6. Style the page with Tailwind CSS — clean card-based layout per course,
   readable typography, mobile-first responsive design. Do not use inline
   styles. If the project already has an established color palette or
   design tokens (check globals.css), use them for consistency rather than
   introducing new colors.

7. Do NOT touch any payment-related code, Razorpay, or booking form
   submission logic — this step is scoped only to confirming Supabase data
   renders correctly on a public page. That work comes in a later phase.

8. After making changes, run typecheck, lint, and a production build to
   confirm everything compiles cleanly. Then run the dev server and tell
   me the exact URL to check (e.g. http://localhost:3000/courses), and
   flag clearly if there are any errors, missing env vars, or empty query
   results I need to address before it will render correctly.
