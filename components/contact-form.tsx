"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input required className="focus-ring min-h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] px-4 font-normal" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Phone
          <input required className="focus-ring min-h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] px-4 font-normal" placeholder="+91" />
        </label>
      </div>
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            Email
            <input type="email" className="focus-ring min-h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] px-4 font-normal" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Project Type
            <select className="focus-ring min-h-12 rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] px-4 font-normal">
              <option>Residential Construction</option>
              <option>Commercial Construction</option>
              <option>Renovation</option>
              <option>Civil Works</option>
            </select>
          </label>
        </div>
      )}
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea required rows={compact ? 3 : 5} className="focus-ring rounded-sm border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3 font-normal" placeholder="Tell us about your site, timeline and requirements." />
      </label>
      <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 text-sm font-extrabold text-[#071a33] transition hover:bg-[#e2b24e]">
        <Send size={17} />
        Submit Enquiry
      </button>
      {sent && <p className="text-sm font-semibold text-[color:var(--gold)]">Thank you. This demo form is ready to connect to your preferred enquiry system.</p>}
    </form>
  );
}
