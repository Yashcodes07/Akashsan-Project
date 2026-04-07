import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { NAV_ITEMS, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-gold/10 bg-obsidian-950 px-4 sm:px-6 pt-16 pb-8"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-obsidian-950" />
              </div>
              <span className="font-display text-xl font-semibold">
                <span className="text-gold">Pure</span>
                <span className="text-obsidian-50">Estate</span>
              </span>
            </div>
            <p className="font-body text-sm text-obsidian-100/45 leading-relaxed">
              Delhi NCR&apos;s premium cleaning specialists — delivering spotless
              results since 2016.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center text-obsidian-100/40 hover:text-gold hover:border-gold/40 transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs text-gold uppercase tracking-[0.2em] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-obsidian-100/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs text-gold uppercase tracking-[0.2em] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="font-body text-sm text-obsidian-100/50 hover:text-gold transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs text-gold uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "hello@pureestate.in" },
                { icon: MapPin, text: "Delhi NCR, India" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-gold/50 shrink-0" />
                  <span className="font-body text-sm text-obsidian-100/50">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-obsidian-100/30">
            © {year} PureEstate Cleaning. All rights reserved.
          </p>
          <p className="font-body text-xs text-obsidian-100/25">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
