import {
  Layers,
  Grid3x3,
  Armchair,
  Building2,
  ScanLine,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Grid3x3,
  Armchair,
  Building2,
  ScanLine,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-4 sm:px-6 overflow-hidden"
      aria-label="Our services"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-20">
          <p className="font-body text-xs text-gold tracking-[0.25em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50">
            Our{" "}
            <span className="font-semibold gold-shimmer">Services</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </AnimateOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <AnimateOnScroll key={service.id} delay={idx * 80}>
                <article className="group relative h-full rounded-2xl bg-obsidian-800/50 gold-border card-lift p-8 flex flex-col overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.03] transition-colors duration-500 rounded-2xl" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                      {Icon && (
                        <Icon className="w-6 h-6 text-gold" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold text-obsidian-50 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-obsidian-100/55 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 font-body text-xs text-obsidian-100/60"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-500" />
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
