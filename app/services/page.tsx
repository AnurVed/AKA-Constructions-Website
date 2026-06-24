import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionIntro } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Services Punjab",
  description:
    "Residential construction, commercial construction, renovation, interiors, civil construction, project management and maintenance services in Mohali and Punjab.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction Services Punjab"
        title="Specialist services for residential, commercial and civil construction."
        text="A.K.A Constructions supports projects from early planning through site delivery, finishes and maintenance."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-pad">
        <div className="container-shell">
          <SectionIntro
            eyebrow="What We Do"
            title="A complete construction service portfolio with clear project accountability."
            text="Each service is structured around practical benefits, defined features and responsible coordination for the client."
            align="centre"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.title} className="overflow-hidden rounded-sm bg-[color:var(--panel)] premium-shadow">
                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative min-h-64">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                  </div>
                  <div className="p-7">
                    <service.icon className="text-[color:var(--gold)]" size={32} />
                    <h2 className="mt-4 font-[var(--font-manrope)] text-2xl font-extrabold">{service.title}</h2>
                    <p className="mt-3 leading-7 text-[color:var(--muted)]">{service.description}</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">Benefits</p>
                        <ul className="mt-3 grid gap-2">
                          {service.benefits.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-[color:var(--muted)]">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-[color:var(--gold)]" size={16} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">Key Features</p>
                        <ul className="mt-3 grid gap-2">
                          {service.features.map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-[color:var(--muted)]">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-[color:var(--gold)]" size={16} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
