import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { company, navItems, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#071a33] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
        <div>
          <h2 className="font-[var(--font-manrope)] text-2xl font-extrabold">{company.name}</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/70">
            Construction, renovation and civil project delivery for clients who value clear communication,
            durable workmanship and dependable site management.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social media profile"
                className="focus-ring grid h-10 w-10 place-items-center rounded-sm border border-white/20 text-white/80 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link key={service.title} href="/services" className="text-white/72 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">Contact</h3>
          <div className="mt-5 grid gap-4 text-white/72">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[color:var(--gold)]" size={18} />
              <span>{company.addressLines.join(" ")}</span>
            </p>
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="flex gap-3 transition hover:text-white">
              <Phone className="shrink-0 text-[color:var(--gold)]" size={18} />
              {company.phone}
            </a>
            <p>{company.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} A.K.A Constructions. All rights reserved.</p>
          <p>Built for construction services in Mohali and Punjab.</p>
        </div>
      </div>
    </footer>
  );
}
