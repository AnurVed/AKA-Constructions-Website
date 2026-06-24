"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";

export function LightboxGallery({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <button
            key={project.title}
            onClick={() => setActive(project)}
            className="image-sheen group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#101827] text-left premium-shadow"
          >
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#071a33]/88 via-[#071a33]/16 to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">{project.category}</span>
              <span className="mt-2 block font-[var(--font-manrope)] text-xl font-extrabold">{project.title}</span>
              <span className="mt-2 block text-sm text-white/75">{project.location}</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/82 p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-sm bg-[color:var(--panel)]">
            <button
              onClick={() => setActive(null)}
              className="focus-ring absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-sm bg-white text-[#071a33]"
              aria-label="Close gallery image"
            >
              <X size={22} />
            </button>
            <div className="relative aspect-[16/9] bg-[#101827]">
              <Image src={active.image} alt={active.title} fill sizes="90vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">{active.category}</p>
              <h3 className="mt-2 font-[var(--font-manrope)] text-2xl font-extrabold">{active.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
