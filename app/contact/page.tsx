import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionIntro } from "@/components/ui";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact A.K.A Constructions",
  description:
    "Contact A.K.A Constructions for residential, commercial, renovation and civil construction services in Mohali, Punjab.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote or discuss your upcoming construction project."
        text="Share your requirements with A.K.A Constructions and our team will help you take the next practical step."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Get In Touch"
              title="Clear project conversations begin with a few useful details."
              text="Tell us about the site, project type, expected timeline and any specific requirements. The form is ready to connect with your preferred CRM, email or enquiry workflow."
            />
            <div className="mt-8 grid gap-4">
              <Info icon={MapPin} title="Address">
                <strong>{company.name}</strong>
                <br />
                {company.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </Info>
              <Info icon={Phone} title="Phone">
                <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="font-bold transition hover:text-[color:var(--gold)]">
                  {company.phone}
                </a>
              </Info>
              <Info icon={Clock} title="Business Hours">{company.hours}</Info>
            </div>
          </Reveal>
          <Reveal className="rounded-sm bg-[color:var(--panel)] p-6 premium-shadow md:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <div className="grid min-h-96 place-items-center rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center premium-shadow">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[color:var(--gold)]">Google Maps</p>
              <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold">Sector 82, Sahibzada Ajit Singh Nagar</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-[color:var(--muted)]">
                Map integration placeholder for Plot No. 406, Second Floor, Sector 82, Sahibzada Ajit Singh Nagar, Punjab 140307.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-sm bg-[color:var(--panel)] p-5 premium-shadow">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-[color:var(--navy)] text-[color:var(--gold)]">
        <Icon size={22} />
      </span>
      <div>
        <h2 className="font-[var(--font-manrope)] text-lg font-extrabold">{title}</h2>
        <p className="mt-2 leading-7 text-[color:var(--muted)]">{children}</p>
      </div>
    </div>
  );
}
