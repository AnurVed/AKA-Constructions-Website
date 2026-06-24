import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { ButtonLink, CountUp, ImageCard, Reveal, SectionIntro } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { faqs, services, testimonials, whyChooseUs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#071a33] text-white">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=82"
          alt="Premium construction project with crane and concrete structure"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/72 to-[#071a33]/25" />
        <div className="container-shell relative grid min-h-[calc(100vh-80px)] items-center py-20">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[color:var(--gold)]">
              Construction Company in Mohali
            </p>
            <h1 className="font-[var(--font-manrope)] text-5xl font-extrabold leading-[1.02] text-balance md:text-7xl">
              Building Excellence, Creating Trust
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Delivering quality construction solutions with precision, reliability and craftsmanship.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a Quote</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact Us</ButtonLink>
            </div>
          </Reveal>
          <div className="absolute bottom-8 left-1/2 hidden w-[min(1180px,calc(100%-32px))] -translate-x-1/2 gap-4 md:grid md:grid-cols-4">
            {[
              ["12+", "Years Team Experience"],
              ["85+", "Delivered Work Packages"],
              ["100%", "Process Transparency"],
              ["6", "Core Service Areas"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-white/25 pl-4">
                <p className="text-2xl font-extrabold text-[color:var(--gold)]">{value}</p>
                <p className="text-sm text-white/72">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Established Approach"
              title="Construction delivered with clarity, care and accountable site control."
              text="A.K.A Constructions supports residential, commercial, renovation and civil construction requirements across Mohali and Punjab. Our work is guided by practical planning, transparent communication, material discipline and a strong respect for safety on site."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Quality-led execution", "Transparent coordination", "Timely delivery focus", "Safety-minded sites"].map((item) => (
                <p key={item} className="flex items-center gap-3 font-bold">
                  <CheckCircle2 className="text-[color:var(--gold)]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <ImageCard
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Construction workers reviewing project drawings on site"
              className="aspect-[5/4] premium-shadow"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--navy)] text-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Why Choose Us"
            title="A disciplined partner for demanding construction work."
            text="Every project benefits from steady supervision, appropriate materials, realistic schedules and a professional approach to client communication."
            align="centre"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Reveal key={item.title} className="border border-white/12 bg-white/[0.04] p-6">
                <item.icon className="text-[color:var(--gold)]" size={30} />
                <h3 className="mt-5 font-[var(--font-manrope)] text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Featured Services"
              title="End-to-end construction services for homes, workplaces and built assets."
              text="From structural civil works to carefully finished interiors, our services are planned around dependable execution."
            />
            <Link href="/services" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-sm border border-[color:var(--line)] px-5 font-bold">
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Reveal key={service.title} className="overflow-hidden rounded-sm bg-[color:var(--panel)] premium-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <service.icon className="text-[color:var(--gold)]" size={28} />
                  <h3 className="mt-4 font-[var(--font-manrope)] text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#eef1f5] dark:bg-[#0b1524]">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Project Showcase"
            title="Selected project types shaped by strong planning and refined execution."
            text="A sample portfolio of residential, commercial, retail and infrastructure work that reflects the capabilities clients often request."
            align="centre"
          />
          <div className="mt-12">
            <LightboxGallery limit={3} />
          </div>
        </div>
      </section>

      <StatsBand />
      <Testimonials />
      <FaqBand />

      <section className="bg-[color:var(--navy)] py-16 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[color:var(--gold)]">Start a Project</p>
            <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold md:text-5xl">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/72">
              Share your requirements and we will help you define a practical next step for your site, budget and schedule.
            </p>
          </div>
          <div className="bg-white p-5 text-[#111827]">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  );
}

function StatsBand() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--panel)] py-12">
      <div className="container-shell grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {[
          [85, "+", "Work Packages"],
          [18, "+", "Service Categories"],
          [6, "", "Days Weekly Support"],
          [100, "%", "Transparent Planning"],
        ].map(([value, suffix, label]) => (
          <Reveal key={label as string}>
            <p className="font-[var(--font-manrope)] text-4xl font-extrabold text-[color:var(--gold)]">
              <CountUp value={value as number} suffix={suffix as string} />
            </p>
            <p className="mt-2 font-bold text-[color:var(--muted)]">{label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionIntro
          eyebrow="Client Voice"
          title="Professional feedback from realistic construction engagements."
          text="Clear communication and careful coordination are often what clients value most after the work is complete."
          align="centre"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name} className="rounded-sm bg-[color:var(--panel)] p-7 premium-shadow">
              <Quote className="text-[color:var(--gold)]" size={34} />
              <p className="mt-5 leading-8 text-[color:var(--muted)]">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-6 font-[var(--font-manrope)] text-lg font-extrabold">{item.name}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{item.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqBand() {
  return (
    <section className="section-pad bg-[#eef1f5] dark:bg-[#0b1524]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro
          eyebrow="FAQ"
          title="Useful answers before the first site visit."
          text="These common questions help frame early conversations around scope, quality and delivery."
        />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Reveal key={faq.question} className="rounded-sm bg-[color:var(--panel)] p-6">
              <h3 className="font-[var(--font-manrope)] text-lg font-extrabold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
