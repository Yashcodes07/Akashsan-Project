// "use client";

// import { useState, type FormEvent } from "react";
// import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
// import AnimateOnScroll from "./AnimateOnScroll";
// import { cn } from "@/lib/utils";
// import { SERVICES } from "@/lib/data";

// interface FormState {
//   name: string;
//   phone: string;
//   email: string;
//   service: string;
//   message: string;
// }

// const INITIAL: FormState = {
//   name: "",
//   phone: "",
//   email: "",
//   service: "",
//   message: "",
// };

// type Status = "idle" | "loading" | "success" | "error";

// export default function Contact() {
//   const [form, setForm] = useState<FormState>(INITIAL);
//   const [status, setStatus] = useState<Status>("idle");

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     // Simulate API call — replace with your actual endpoint
//     await new Promise((r) => setTimeout(r, 1500));
//     setStatus("success");
//     setForm(INITIAL);
//   };

//   const inputClass = cn(
//     "w-full bg-obsidian-800/60 border border-gold/15 rounded-xl px-4 py-3",
//     "font-body text-sm text-obsidian-50 placeholder-obsidian-100/30",
//     "focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20",
//     "transition-all duration-200"
//   );

//   return (
//     <section
//       id="contact"
//       className="relative py-28 px-4 sm:px-6 bg-obsidian-800/20"
//       aria-label="Contact and booking"
//     >
//       <div
//         className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
//         aria-hidden="true"
//       />

//       <div className="max-w-7xl mx-auto">
//         <AnimateOnScroll className="text-center mb-16">
//           <p className="font-body text-xs text-gold tracking-[0.25em] uppercase mb-3">
//             Get in Touch
//           </p>
//           <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50">
//             Book Your{" "}
//             <span className="font-semibold gold-shimmer">Free Quote</span>
//           </h2>
//           <div className="gold-divider mx-auto mt-6" />
//         </AnimateOnScroll>

//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Contact info */}
//           <AnimateOnScroll className="lg:col-span-2 space-y-6">
//             <p className="font-body text-sm text-obsidian-100/60 leading-relaxed">
//               Fill in the form and one of our specialists will reach you within
//               2 hours to confirm availability and pricing.
//             </p>

//             {[
//               {
//                 icon: Phone,
//                 label: "Phone",
//                 value: "+91 98765 43210",
//                 href: "tel:+919876543210",
//               },
//               {
//                 icon: Mail,
//                 label: "Email",
//                 value: "hello@pureestate.in",
//                 href: "mailto:hello@pureestate.in",
//               },
//               {
//                 icon: MapPin,
//                 label: "Location",
//                 value: "Delhi NCR, India",
//                 href: "#",
//               },
//             ].map(({ icon: Icon, label, value, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="flex items-start gap-4 group"
//                 aria-label={`${label}: ${value}`}
//               >
//                 <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
//                   <Icon className="w-4 h-4 text-gold" />
//                 </div>
//                 <div>
//                   <p className="font-body text-xs text-obsidian-100/40 uppercase tracking-wide">
//                     {label}
//                   </p>
//                   <p className="font-body text-sm text-obsidian-50 group-hover:text-gold transition-colors">
//                     {value}
//                   </p>
//                 </div>
//               </a>
//             ))}

//             {/* Hours */}
//             <div className="mt-8 p-5 rounded-xl border border-gold/10 bg-gold/5">
//               <p className="font-body text-xs text-gold uppercase tracking-wider mb-3">
//                 Working Hours
//               </p>
//               <p className="font-body text-sm text-obsidian-100/60">
//                 Mon – Sat: 7:00 AM – 8:00 PM
//               </p>
//               <p className="font-body text-sm text-obsidian-100/60">
//                 Sunday: 9:00 AM – 4:00 PM
//               </p>
//             </div>
//           </AnimateOnScroll>

//           {/* Form */}
//           <AnimateOnScroll className="lg:col-span-3" delay={150}>
//             {status === "success" ? (
//               <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-gold/20 bg-gold/5">
//                 <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-5">
//                   <Send className="w-6 h-6 text-gold" />
//                 </div>
//                 <h3 className="font-display text-2xl font-semibold text-obsidian-50 mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="font-body text-sm text-obsidian-100/60 max-w-xs">
//                   We&apos;ll get back to you within 2 hours to confirm your booking.
//                 </p>
//                 <button
//                   onClick={() => setStatus("idle")}
//                   className="mt-8 px-6 py-2.5 rounded-full border border-gold/30 text-gold text-sm font-body hover:bg-gold/10 transition-colors"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5 rounded-2xl border border-gold/15 bg-obsidian-800/40 p-8"
//                 noValidate
//               >
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block font-body text-xs text-obsidian-100/50 mb-1.5 uppercase tracking-wide"
//                     >
//                       Full Name *
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       placeholder="Rahul Sharma"
//                       value={form.name}
//                       onChange={handleChange}
//                       className={inputClass}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block font-body text-xs text-obsidian-100/50 mb-1.5 uppercase tracking-wide"
//                     >
//                       Phone *
//                     </label>
//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       required
//                       placeholder="+91 98765 43210"
//                       value={form.phone}
//                       onChange={handleChange}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block font-body text-xs text-obsidian-100/50 mb-1.5 uppercase tracking-wide"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="rahul@example.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="service"
//                     className="block font-body text-xs text-obsidian-100/50 mb-1.5 uppercase tracking-wide"
//                   >
//                     Service Required *
//                   </label>
//                   <select
//                     id="service"
//                     name="service"
//                     required
//                     value={form.service}
//                     onChange={handleChange}
//                     className={cn(inputClass, "cursor-pointer")}
//                   >
//                     <option value="" disabled>
//                       Select a service…
//                     </option>
//                     {SERVICES.map((s) => (
//                       <option key={s.id} value={s.id}>
//                         {s.title}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block font-body text-xs text-obsidian-100/50 mb-1.5 uppercase tracking-wide"
//                   >
//                     Additional Details
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     placeholder="Tell us about your space, any specific concerns…"
//                     value={form.message}
//                     onChange={handleChange}
//                     className={cn(inputClass, "resize-none")}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-gradient text-obsidian-950 font-semibold font-body text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 shadow-lg shadow-gold/20"
//                 >
//                   {status === "loading" ? (
//                     <>
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                       Sending…
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       Send Enquiry
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </AnimateOnScroll>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

/* ─── Contact persons ─── */
const CONTACTS = [
  {
    id: 1,
    name: "Akash",
    whatsapp: "917011672166",
    photo: "/images/Akash.webp",
  },
  {
    id: 2,
    name: "Rishabh",
    whatsapp: "919315886025",
    photo: "/images/Rishabh.webp",
  },
  {
    id: 3,
    name: "Ankush",
    whatsapp: "919205707690",
    photo: "/images/ankush.webp",
  },
  {
    id: 4,
    name: "Amit",
    whatsapp: "919999999999", // replace with real
    photo: "/images/praval.jpg", // replace if needed
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 bg-obsidian-800/20"
    >
      {/* top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs text-gold tracking-[0.25em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50">
            Talk to Our{" "}
            <span className="font-semibold gold-shimmer">Specialists</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </AnimateOnScroll>

        {/* layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* left side */}
          <AnimateOnScroll className="lg:col-span-2 space-y-6">
            <p className="text-sm text-obsidian-100/60">
              Reach out directly to one of our specialists — they’ll respond
              quickly and guide you through everything.
            </p>

            {[
              {
                icon: Phone,
                label: "General Line",
                value: "+91 7011 672166",
                href: "tel:+917011672166",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Delhi NCR, India",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-obsidian-100/40 uppercase">
                    {label}
                  </p>
                  <p className="text-sm text-obsidian-50 group-hover:text-gold">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* hours */}
            <div className="mt-8 p-5 rounded-xl border border-gold/10 bg-gold/5">
              <p className="text-xs text-gold uppercase mb-3">
                Working Hours
              </p>
              <p className="text-sm text-obsidian-100/60">
                Mon – Sat: 7:00 AM – 8:00 PM
              </p>
              <p className="text-sm text-obsidian-100/60">
                Sunday: 9:00 AM – 4:00 PM
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
  {[
    { label: "Clients", value: "100+" },
    { label: "Projects", value: "250+" },
    { label: "Response Time", value: "< 2 hrs" },
    { label: "Satisfaction", value: "98%" },
  ].map((item) => (
    <div
      key={item.label}
      className="p-4 rounded-xl border border-gold/10 bg-obsidian-800/40 text-center"
    >
      <p className="text-lg font-semibold text-gold">{item.value}</p>
      <p className="text-sm text-obsidian-100/50">{item.label}</p>
    </div>
  ))}
</div>
          </AnimateOnScroll>

          {/* right side cards */}
          <AnimateOnScroll className="lg:col-span-3" delay={150}>
            <div className="grid sm:grid-cols-2 gap-6">
              {CONTACTS.map((person) => (
                <div
                  key={person.id}
                  className="
                    flex flex-col items-center text-center
                    rounded-2xl border border-gold/15 bg-obsidian-800/40
                    p-6 gap-4
                    hover:border-gold/35 hover:bg-obsidian-800/60
                    transition-all duration-300 group
                  "
                >
                  {/* avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/60 via-gold/20 to-transparent blur-sm opacity-70 group-hover:opacity-100" />

                    <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-gold/80 to-gold/20">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* name */}
                  <h3 className="text-lg font-semibold text-obsidian-50">
                    {person.name}
                  </h3>

                  {/* whatsapp */}
                  <a
                    href={`https://wa.me/${person.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full flex items-center justify-center gap-2
                      py-2.5 rounded-xl
                      bg-gold-gradient text-obsidian-950
                      font-semibold text-sm
                      hover:opacity-90 active:scale-[0.98]
                      transition-all duration-200
                      shadow-lg shadow-gold/20
                    "
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}