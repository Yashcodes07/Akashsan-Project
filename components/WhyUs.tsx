import {
  ShieldCheck,
  Leaf,
  BadgeCheck,
  CalendarCheck,
} from "lucide-react";
import { WHY_US, STATS } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Leaf,
  BadgeCheck,
  CalendarCheck,
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-28 px-4 sm:px-6 bg-obsidian-800/30"
      aria-label="Why choose us"
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Stats banner */}
        <AnimateOnScroll className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-4 py-6 rounded-2xl border border-gold/10 bg-gold/5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="font-display text-4xl font-semibold gold-shimmer">
                {stat.value}
              </p>
              <p className="font-body text-xs text-obsidian-100/50 tracking-wide mt-2 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </AnimateOnScroll>

        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="font-body text-xs text-gold tracking-[0.25em] uppercase mb-3">
            Our Commitment
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50">
            Why Choose{" "}
            <span className="font-semibold gold-shimmer">AkashSan</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </AnimateOnScroll>

        {/* Why Us grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <AnimateOnScroll key={item.title} delay={idx * 80}>
                <div className="group flex flex-col items-start p-7 rounded-2xl gold-border card-lift bg-obsidian-800/40 h-full">
                  <div className="w-12 h-12 rounded-full border border-gold/25 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                    {Icon && <Icon className="w-5 h-5 text-gold" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-obsidian-50 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-obsidian-100/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
