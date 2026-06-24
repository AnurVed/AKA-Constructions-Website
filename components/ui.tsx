"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "centre";
}) {
  return (
    <div className={clsx("max-w-3xl", align === "centre" && "mx-auto text-center")}>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--gold)]">
        {eyebrow}
      </p>
      <h2 className="font-[var(--font-manrope)] text-3xl font-extrabold leading-tight text-balance md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[color:var(--muted)] md:text-lg">{text}</p>
    </div>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-bold transition",
        variant === "primary" && "bg-[color:var(--gold)] text-[#071a33] hover:bg-[#e2b24e]",
        variant === "secondary" &&
          "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/18",
        variant === "dark" && "bg-[#071a33] text-white hover:bg-[#102b51]",
      )}
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function ImageCard({
  src,
  alt,
  children,
  priority,
  className,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("image-sheen relative overflow-hidden rounded-sm bg-[#101827]", className)}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
      {children}
    </div>
  );
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
