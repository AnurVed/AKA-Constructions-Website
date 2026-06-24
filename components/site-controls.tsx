"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/lib/data";

export function SiteControls() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}?text=Hello%20A.K.A%20Constructions%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
        className="focus-ring grid h-12 w-12 place-items-center rounded-sm bg-[#25D366] text-white premium-shadow transition hover:scale-105"
        aria-label="Contact A.K.A Constructions on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={24} />
      </a>
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-ring grid h-12 w-12 place-items-center rounded-sm bg-[color:var(--gold)] text-[#071a33] premium-shadow transition hover:scale-105"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
