// "use client";

// import { useEffect, useRef } from "react";
// import { ArrowDown, Star } from "lucide-react";

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Parallax on mouse move
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       const el = containerRef.current;
//       if (!el) return;
//       const { clientX, clientY, currentTarget } = e;
//       const { width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
//       const x = (clientX / width - 0.5) * 14;
//       const y = (clientY / height - 0.5) * 14;
//       el.style.transform = `translate(${x}px, ${y}px)`;
//     };
//     window.addEventListener("mousemove", handler);
//     return () => window.removeEventListener("mousemove", handler);
//   }, []);

//   const scrollToServices = () => {
//     document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
//       aria-label="Hero section"
//     >
//       {/* Background gradient blobs */}
//       <div className="absolute inset-0 z-0" aria-hidden="true">
//         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-obsidian-800/60 blur-[80px]" />
//       </div>

//       {/* Decorative grid lines */}
//       <div
//         className="absolute inset-0 z-0 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
//           backgroundSize: "80px 80px",
//         }}
//         aria-hidden="true"
//       />

//       {/* Orbiting ring */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 animate-spin-slow"
//         aria-hidden="true"
//       />
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/8"
//         aria-hidden="true"
//       />

//       {/* Hero content */}
//       <div
//         ref={containerRef}
//         className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 transition-transform duration-300 ease-out"
//       >
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8 backdrop-blur-sm">
//           <Star className="w-3.5 h-3.5 text-gold fill-gold" />
//           <span className="font-body text-xs text-gold tracking-[0.15em] uppercase font-medium">
//             Delhi NCR&apos;s Premium Cleaning Service
//           </span>
//           <Star className="w-3.5 h-3.5 text-gold fill-gold" />
//         </div>

//         {/* Headline */}
//         <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-6">
//           <span className="block text-obsidian-50">Spotless</span>
//           <span className="block gold-shimmer font-semibold">Perfection</span>
//           <span className="block text-obsidian-50">Delivered.</span>
//         </h1>

//         {/* Sub-headline */}
//         <p className="font-body text-base sm:text-lg text-obsidian-100/60 max-w-xl mx-auto leading-relaxed mb-10">
//           Professional cleaning services tailored for discerning homes and
//           offices — from deep carpet extraction to gleaming glass finishes.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button
//             onClick={() =>
//               document
//                 .querySelector("#contact")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-8 py-3.5 rounded-full bg-gold-gradient text-obsidian-950 font-semibold font-body text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl shadow-gold/25"
//           >
//             Book a Free Quote
//           </button>
//           <button
//             onClick={() =>
//               document
//                 .querySelector("#services")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-8 py-3.5 rounded-full border border-gold/30 text-obsidian-50/80 font-body text-sm tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-200"
//           >
//             Explore Services
//           </button>
//         </div>

//         {/* Social proof */}
//         <div className="mt-14 flex items-center justify-center gap-8">
//           {[
//             { value: "100+", label: "Cleans Done" },
//             { value: "98%", label: "Satisfaction" },
//             { value: "2+Yrs", label: "Experience" },
//           ].map((s) => (
//             <div key={s.label} className="text-center">
//               <p className="font-display text-2xl sm:text-3xl font-semibold text-gold">
//                 {s.value}
//               </p>
//               <p className="font-body text-xs text-obsidian-100/50 tracking-wide mt-0.5">
//                 {s.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll cue */}
//       <button
//         onClick={scrollToServices}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold/40 hover:text-gold/80 transition-colors duration-300"
//         aria-label="Scroll to services"
//       >
//         <span className="font-body text-xs tracking-[0.15em] uppercase">
//           Scroll
//         </span>
//         <ArrowDown className="w-4 h-4 animate-bounce" />
//       </button>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Parallax restored (ONLY on right side now)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT SIDE */}
        <div className="text-left">
          
          {/* ✅ LOGO IMAGE ADDED */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/logo.jpeg" // 👉 put your image in public/images/logo.jpg
              alt="AkashSan Logo"
              className="w-20 h-20 object-cover rounded-full border border-gold/30"
            />
            <span className="font-display text-5xl font-semibold tracking-wide">
            <span className="text-gold">Akash</span>
            <span className="text-obsidian-50">San</span>
          </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-xs text-gold tracking-widest uppercase">
              Premium Cleaning Service
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-obsidian-50 mb-6 leading-tight">
            Professional Cleaning  
            <span className="block gold-shimmer font-semibold">
              You Can Trust
            </span>
          </h1>

          {/* Description */}
          <p className="text-obsidian-100/60 max-w-md mb-8">
            We deliver spotless homes and offices across Delhi NCR with premium,
            reliable, and detail-focused cleaning services.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-semibold text-sm shadow-lg shadow-gold/25"
            >
              Book Now
            </button>

            <button
              onClick={() =>
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full border border-gold/30 text-obsidian-50 hover:text-gold"
            >
              Explore
            </button>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
       <div className="relative flex justify-center items-center">

  {/* 🔥 OUTER GLOW RING */}
  <div className="absolute w-[700px] h-[700px] rounded-full border border-gold/10 animate-spin-slower opacity-60" />

  {/* 🔥 MIDDLE RING */}
  <div className="absolute w-[550px] h-[550px] rounded-full border border-white/10 animate-spin-slow" />

  {/* 🔥 INNER RING */}
  <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/20 animate-spin-reverse" />

  {/* 🔥 SOFT GLOW BACKGROUND */}
  <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />

  {/* 🔥 CONTENT (PARALLAX) */}
  <div
    ref={containerRef}
    className="relative text-center max-w-xl transition-transform duration-200 ease-out"
  >
    <h1 className="text-5xl sm:text-6xl font-light leading-tight">
      <span className="block text-obsidian-50">Spotless</span>
      <span className="block gold-shimmer font-semibold">Perfection</span>
      <span className="block text-obsidian-50">Delivered.</span>
    </h1>

    {/* Stats */}
    <div className="mt-10 flex justify-center gap-8">
      {[
        { value: "100+", label: "Cleans" },
        { value: "98%", label: "Happy" },
        { value: "2+Yrs", label: "Experience" },
      ].map((s) => (
        <div key={s.label}>
          <p className="text-xl font-semibold text-gold">{s.value}</p>
          <p className="text-xs text-obsidian-100/50">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>

      {/* Scroll */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold"
      >
        <ArrowDown className="animate-bounce" />
      </button>
    </section>
  );
}