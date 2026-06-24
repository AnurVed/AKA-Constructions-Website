import Image from "next/image";

export function PageHero({
  title,
  eyebrow,
  text,
  image,
}: {
  title: string;
  eyebrow: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#071a33] py-24 text-white md:py-32">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/78 to-[#071a33]/38" />
      <div className="container-shell relative max-w-4xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[color:var(--gold)]">{eyebrow}</p>
        <h1 className="mt-5 font-[var(--font-manrope)] text-4xl font-extrabold leading-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{text}</p>
      </div>
    </section>
  );
}
