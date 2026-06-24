"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui";

const filters = ["All", "Residential", "Commercial", "Retail", "Infrastructure"];

export function ProjectFilter() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`focus-ring min-h-11 rounded-sm border px-5 text-sm font-extrabold transition ${
              filter === item
                ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-[#071a33]"
                : "border-[color:var(--line)] bg-[color:var(--panel)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Reveal key={project.title} className="overflow-hidden rounded-sm bg-[color:var(--panel)] premium-shadow">
            <div className="relative aspect-[4/3]">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[color:var(--gold)]">{project.category}</p>
              <h2 className="mt-3 font-[var(--font-manrope)] text-2xl font-extrabold">{project.title}</h2>
              <p className="mt-2 text-sm font-bold text-[color:var(--muted)]">{project.location}</p>
              <p className="mt-4 leading-7 text-[color:var(--muted)]">{project.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
