import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, SERVICES } from "@/lib/data";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

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
                <span className="text-gold">Akash</span>
                <span className="text-obsidian-50">San</span>
              </span>
            </div>
            <p className="font-body text-sm text-obsidian-100/45 leading-relaxed">
              Delhi &apos;s premium cleaning specialists — delivering spotless
              results since 2025.
            </p>
            <div className="flex gap-3 mt-5">
  {[
    {
      Icon: Instagram,
      link: "https://instagram.com/",
      label: "Instagram",
    },
    {
      Icon: Linkedin,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      Icon: MessageCircle, // WhatsApp icon substitute
      link: "https://wa.me/917011672166", // your number with country code
      label: "WhatsApp",
    },
  ].map(({ Icon, link, label }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center text-obsidian-100/40 hover:text-gold hover:border-gold/40 transition-colors"
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
                { icon: Phone, text: "+91 9205707690" },
                { icon: Phone, text: "+91 7011672166" },
                { icon: Mail, text: "akashsan@gmail.com" },
                { icon: MapPin, text: "Delhi, India" },
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
            © {year} AkashSan Cleaning. All rights reserved.
          </p>
          <p className="font-body text-xs text-obsidian-100/25">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
