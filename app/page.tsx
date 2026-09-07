import Image from "next/image";
import Link from "next/link";

import { createSupabaseClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/supabase/database.types";

type OfferingType = Database["public"]["Tables"]["offerings"]["Row"]["type"];

type ExploreCardData = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

const buttonClasses = {
  primary: "bg-amber-600 text-white hover:bg-amber-700",
  secondary: "border border-white/70 bg-white/5 text-white hover:bg-white/10",
};

const trustBadges = [
  "Yoga Alliance Certified Courses",
  "Traditional Rishikesh Lineage",
  "Small Group, Personal Guidance",
];

function formatDisplayDate(value: string | null | undefined) {
  if (!value) {
    return "Dates to be announced";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatCurrency(value: number | string | null | undefined, currency?: string | null) {
  if (typeof value !== "number") {
    return "Price on request";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency ?? "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

async function fetchUpcomingYttcCohort() {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return null;
  }

  const today = new Date().toISOString().slice(0, 10);

  const { data: cohorts, error } = await supabase
    .from("cohorts")
    .select("id, start_date, end_date, offering_id")
    .eq("is_open_for_booking", true)
    .gte("start_date", today)
    .order("start_date", { ascending: true })
    .limit(1);

  if (error || !cohorts || cohorts.length === 0) {
    return null;
  }

  const cohort = cohorts[0];

  const { data: offering } = await supabase
    .from("offerings")
    .select("id, name, offering_pricing!offering_id(price, currency)")
    .eq("id", cohort.offering_id)
    .maybeSingle();

  if (!offering) {
    return null;
  }

  const pricing = [...(offering.offering_pricing ?? [])].sort(
    (a, b) => Number(a.price ?? Number.MAX_SAFE_INTEGER) - Number(b.price ?? Number.MAX_SAFE_INTEGER),
  );

  const startPrice = pricing[0]?.price;
  const currency = pricing[0]?.currency ?? "USD";

  return {
    title: offering.name,
    description: `${formatDisplayDate(cohort.start_date)}${cohort.end_date ? ` - ${formatDisplayDate(cohort.end_date)}` : ""}${startPrice ? ` • ${formatCurrency(startPrice, currency)}` : " • Price on request"}`,
    href: "/yoga-courses",
  };
}

async function fetchFeaturedOffering(type: OfferingType) {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("offerings")
    .select("id, name, description")
    .eq("type", type)
    .eq("is_active", true)
    .order("name")
    .limit(1);

  if (error || !data || data.length === 0) {
    return null;
  }

  const offering = data[0];

  return {
    title: offering.name,
    description: offering.description?.trim() || "New dates coming soon.",
    href: type === "retreat" ? "/retreat" : "/short-courses",
  };
}

async function fetchExploreCards() {
  const [nextYttc, featuredRetreat, featuredShortCourse] = await Promise.all([
    fetchUpcomingYttcCohort(),
    fetchFeaturedOffering("retreat"),
    fetchFeaturedOffering("short_course"),
  ]);

  return [
    {
      eyebrow: "Next Batch",
      title: nextYttc?.title ?? "New dates coming soon",
      description: nextYttc?.description ?? "A new YTTC cohort will be announced soon.",
      href: nextYttc?.href ?? "/yoga-courses",
    },
    {
      eyebrow: "Retreat",
      title: featuredRetreat?.title ?? "New retreat coming soon",
      description: featuredRetreat?.description ?? "A new retreat experience is being prepared.",
      href: featuredRetreat?.href ?? "/retreat",
    },
    {
      eyebrow: "Short Course",
      title: featuredShortCourse?.title ?? "New short course coming soon",
      description: featuredShortCourse?.description ?? "A new short course will be announced soon.",
      href: featuredShortCourse?.href ?? "/short-courses",
    },
  ] satisfies ExploreCardData[];
}

export default async function Home() {
  const exploreCards = await fetchExploreCards();

  return (
    <main className="bg-stone-50 text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[72vh] min-h-[420px] max-h-[760px]">
          {/* Temporary hero image placeholder: replace with a real ashram photo before launch. */}
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=80"
            alt="Yoga and meditation by a riverside setting inspired by Rishikesh"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/25" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Vedic Yoga Ashram</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Traditional Yoga Ashram in Rishikesh
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
                Daily classes, immersive workshops, and retreats rooted in the traditions of Rishikesh.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/yoga-courses"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium shadow-sm transition ${buttonClasses.primary}`}
                >
                  View Courses
                </Link>
                <Link
                  href="/contact-us"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium shadow-sm transition ${buttonClasses.secondary}`}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600 sm:text-[11px] md:flex-row md:items-center md:justify-center md:divide-x md:divide-slate-300 md:gap-0">
          {trustBadges.map((badge) => (
            <div key={badge} className="md:px-6">
              {badge}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {exploreCards.map((card) => (
            <Link
              key={card.title + card.eyebrow}
              href={card.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">{card.eyebrow}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-600">Testimonials coming soon.</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Have a question?</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Get in touch and we&apos;ll get back to you within 24 hours.
          </h2>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact-us"
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition ${buttonClasses.primary}`}
            >
              Send Enquiry
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-600">info@vedicyogaashram.com • +91 95799 30589</p>
        </div>
      </section>
    </main>
  );
}
