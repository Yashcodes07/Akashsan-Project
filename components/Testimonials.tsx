import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-4 sm:px-6"
      aria-label="Client testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-20">
          <p className="font-body text-xs text-gold tracking-[0.25em] uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50">
            Real <span className="font-semibold gold-shimmer">Stories</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <AnimateOnScroll key={t.id} delay={idx * 100}>
              <blockquote className="group relative h-full rounded-2xl bg-obsidian-800/50 gold-border card-lift p-8 flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-body text-sm text-obsidian-100/70 leading-relaxed flex-1 italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0">
                    <span className="font-display text-lg font-semibold text-gold">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-obsidian-50">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-obsidian-100/40">
                      {t.role}
                    </p>
                  </div>
                </div>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
