import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { Reveal, SectionIntro } from "@/components/ui";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = {
  title: "Construction Projects Mohali",
  description:
    "Explore sample residential villas, commercial buildings, office spaces, retail developments and infrastructure project categories by A.K.A Constructions.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title="Project types that reflect premium residential, commercial and infrastructure delivery."
        text="Explore representative project categories and image-led placeholders for the type of work A.K.A Constructions can present as actual project photography becomes available."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=82"
      />
      <section className="section-pad">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Gallery"
            title="A filtered portfolio built for confident project browsing."
            text="Use the category controls to view sample residential villas, office spaces, retail developments and infrastructure works."
            align="centre"
          />
          <ProjectFilter />
        </div>
      </section>

      <section className="section-pad bg-[#eef1f5] dark:bg-[#0b1524]">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Before / After"
            title="Renovation thinking that improves usability as well as appearance."
            text="The comparison below demonstrates how careful planning can transform existing spaces into better performing assets."
            align="centre"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              ["Before", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"],
              ["After", "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1400&q=80"],
            ].map(([label, image]) => (
              <Reveal key={label} className="relative aspect-[4/3] overflow-hidden rounded-sm premium-shadow">
                <Image src={image} alt={`${label} renovation showcase`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-sm bg-[#071a33] px-4 py-2 text-sm font-extrabold text-white">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Lightbox"
            title="Large-format imagery for detailed project viewing."
            text="The gallery opens each project in an accessible lightbox for richer visual inspection."
            align="centre"
          />
          <div className="mt-12">
            <LightboxGallery />
          </div>
        </div>
      </section>
    </>
  );
}
