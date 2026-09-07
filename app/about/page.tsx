const faqs = [
  {
    question: "Do I need prior yoga experience?",
    answer:
      "No. Our courses are designed for beginners and experienced students alike. We guide everyone at a pace that supports steady progress, confidence, and safe practice.",
  },
  {
    question: "Is the school Yoga Alliance registered?",
    answer:
      "Our teacher training is rooted in traditional yogic discipline and aligns with widely recognized international standards, though registration status should be confirmed before enrollment for your specific certification needs.",
  },
  {
    question: "Is food included in the course fee?",
    answer:
      "Yes, vegetarian meals are included in the program structure, with daily nourishment and a supportive community living environment as part of the ashram experience.",
  },
  {
    question: "Can I attend as a non-teaching student?",
    answer:
      "Absolutely. Many students join for personal growth, wellness, and deep practice without pursuing teaching certification. We welcome all sincere students.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">About</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">About Vedic Yoga Ashram</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        We are a traditional yoga learning community based in Rishikesh, offering immersive teacher training and mindful wellness experiences rooted in the Himalayan yogic lineage.
      </p>

      <section className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Common questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
