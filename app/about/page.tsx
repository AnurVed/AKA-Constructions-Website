import type { Metadata } from "next";
import { ShieldCheck, Target, Telescope, Gem, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A.K.A Constructions, a professional construction company in Mohali delivering residential, commercial, renovation and civil construction services.",
};

export default function AboutPage() {
  const values = [
    "Clear communication",
    "Quality workmanship",
    "Respect for timelines",
    "Responsible site safety",
    "Transparent project coordination",
    "Long-term client relationships",
  ];

  return (
    <>
      <PageHero
        eyebrow="About A.K.A Constructions"
        title="A practical, quality-led construction partner for Mohali and Punjab."
        text="We bring disciplined planning, experienced coordination and attentive workmanship to residential, commercial, renovation and civil construction projects."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Company Overview"
              title="Built around dependability, detail and measured progress."
              text="A.K.A Constructions works with homeowners, businesses and project stakeholders who need reliable construction services without unnecessary complexity. Our approach is hands-on and transparent: define the scope clearly, coordinate the right resources, supervise the site closely and keep the client informed."
            />
          </Reveal>
          <Reveal className="grid gap-5">
            {[
              {
                icon: Target,
                title: "Mission Statement",
                text: "To deliver dependable construction services that combine practical planning, quality materials and careful execution.",
              },
              {
                icon: Telescope,
                title: "Vision Statement",
                text: "To be recognised across Mohali and Punjab as a trusted construction partner for well-managed, durable and thoughtfully finished projects.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm bg-[color:var(--panel)] p-7 premium-shadow">
                <item.icon className="text-[color:var(--gold)]" size={32} />
                <h2 className="mt-5 font-[var(--font-manrope)] text-2xl font-extrabold">{item.title}</h2>
                <p className="mt-3 leading-8 text-[color:var(--muted)]">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--navy)] text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Core Values"
            title="The standards that guide every site conversation."
            text="Our values are deliberately practical because construction succeeds when small decisions are handled correctly every day."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <Reveal key={value} className="flex items-center gap-3 border border-white/12 bg-white/[0.04] p-5">
                <CheckCircle2 className="shrink-0 text-[color:var(--gold)]" size={21} />
                <p className="font-bold">{value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Gem,
              title: "Quality Commitment",
              text: "We pay attention to material suitability, workmanship, site sequencing and finish quality. Our quality approach is based on regular checks, accountable supervision and a clear understanding of the client’s expectations.",
            },
            {
              icon: ShieldCheck,
              title: "Safety Commitment",
              text: "Safe work practices protect people and project continuity. We encourage orderly sites, sensible access control, correct handling of materials and regular awareness around site risks.",
            },
          ].map((item) => (
            <Reveal key={item.title} className="rounded-sm bg-[color:var(--panel)] p-8 premium-shadow">
              <item.icon className="text-[color:var(--gold)]" size={34} />
              <h2 className="mt-5 font-[var(--font-manrope)] text-3xl font-extrabold">{item.title}</h2>
              <p className="mt-4 leading-8 text-[color:var(--muted)]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
