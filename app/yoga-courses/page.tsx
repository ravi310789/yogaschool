import Link from "next/link";

import { createSupabaseClient } from "@/lib/supabase/client";
import type { OfferingsWithPricing } from "@/lib/supabase/database.types";

function formatAccommodationLabel(value: string | null | undefined) {
  if (!value) {
    return "Not applicable";
  }

  const labels: Record<string, string> = {
    private: "Private Room",
    shared_2: "Shared Room",
    shared_3: "Shared Room (3)",
    dorm: "Dormitory",
    not_applicable: "Not applicable",
  };

  return labels[value] ?? value.replace(/_/g, " ");
}

function formatPrice(value: number | null | undefined, currency: string | null | undefined) {
  if (typeof value !== "number") {
    return "Price on request";
  }

  const safeCurrency = currency ?? "USD";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: safeCurrency,
    maximumFractionDigits: 0,
  }).format(value);
}

async function getYttcCourses() {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return {
      error:
        "Supabase credentials are missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment before loading this page.",
      data: [],
    };
  }

  const { data, error } = await supabase
    .from("offerings")
    .select("id, slug, name, description, type, is_active, offering_pricing!offering_id(*)")
    .eq("type", "yttc")
    .eq("is_active", true)
    .order("name");

  if (error) {
    return {
      error: error.message,
      data: [],
    };
  }

  const courses = (data ?? []) as OfferingsWithPricing[];

  return {
    error: null,
    data: courses.map((course) => ({
      ...course,
      offering_pricing: [...(course.offering_pricing ?? [])].sort(
        (a, b) => Number(a.price ?? Number.MAX_SAFE_INTEGER) - Number(b.price ?? Number.MAX_SAFE_INTEGER),
      ),
    })),
  };
}

export const metadata = {
  title: "Courses | Yoga School",
  description: "Explore active yoga teacher training and course offerings.",
};

export default async function CoursesPage() {
  const { data: courses, error } = await getYttcCourses();

  if (error) {
    return (
      <main className="min-h-screen bg-stone-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-600">Course data unavailable</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Unable to load courses</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Yoga school</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Courses</h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
          >
            Back home
          </Link>
        </div>

        {courses.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold">No courses available</h2>
            <p className="mt-2 text-slate-600">There are no active YTTC offerings in the database right now.</p>
          </section>
        ) : (
          <div className="grid gap-6">
            {courses.map((course) => (
              <article key={course.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">YTTC</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{course.name}</h2>
                  </div>
                  {course.slug ? (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                      {course.slug}
                    </span>
                  ) : null}
                </div>

                {course.description ? (
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{course.description}</p>
                ) : (
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500">No description available for this course yet.</p>
                )}

                <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                  <div className="grid grid-cols-[1.4fr_1.2fr_0.9fr] bg-slate-100 text-left text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
                    <div className="px-4 py-3">Duration</div>
                    <div className="px-4 py-3">Accommodation</div>
                    <div className="px-4 py-3">Price</div>
                  </div>

                  {(course.offering_pricing ?? []).length === 0 ? (
                    <div className="px-4 py-5 text-sm text-slate-600">No pricing options available for this course.</div>
                  ) : (
                    (course.offering_pricing ?? []).map((pricing) => (
                      <div
                        key={pricing.id}
                        className="grid grid-cols-[1.4fr_1.2fr_0.9fr] border-t border-slate-200 text-sm text-slate-700"
                      >
                        <div className="px-4 py-3">{pricing.duration_label}</div>
                        <div className="px-4 py-3">{formatAccommodationLabel(pricing.accommodation_type)}</div>
                        <div className="px-4 py-3 font-medium text-slate-900">
                          {formatPrice(pricing.price, pricing.currency)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
