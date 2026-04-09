
"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section className="relative min-h-screen flex items-center overflow-hidden grain pt-28 md:pt-32">
      {/* 🔥 TOP PADDING FIX ADDED */}

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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT SIDE */}
        <div className="text-center lg:text-left">
          
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <img
              src="/images/logo.jpeg"
              alt="AkashSan Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border border-gold/30"
            />
            <span className="font-display text-3xl sm:text-5xl font-semibold tracking-wide">
              <span className="text-gold">Akash</span>
              <span className="text-obsidian-50">San</span>
            </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-xs text-gold tracking-widest uppercase">
              Premium Cleaning Service
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-obsidian-50 mb-6 leading-tight">
            Professional Cleaning  
            <span className="block gold-shimmer font-semibold">
              You Can Trust
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-obsidian-100/60 max-w-md mx-auto lg:mx-0 mb-8">
            We deliver spotless homes and offices across Delhi with premium,
            reliable, and detail-focused cleaning services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">

          {/* Responsive Rings */}
          <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full border border-gold/10 animate-spin-slower opacity-60" />

          <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full border border-white/10 animate-spin-slow" />

          <div className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border border-gold/20 animate-spin-reverse" />

          <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gold/5 blur-[80px]" />

          {/* Content */}
          <div
            ref={containerRef}
            className="relative text-center max-w-xs sm:max-w-md"
          >
            <h1 className="text-3xl sm:text-5xl font-light leading-tight">
              <span className="block text-obsidian-50">Spotless</span>
              <span className="block gold-shimmer font-semibold">Perfection</span>
              <span className="block text-obsidian-50">Delivered.</span>
            </h1>

            <div className="mt-8 flex justify-center gap-6">
              {[
                { value: "100+", label: "Cleans" },
                { value: "98%", label: "Happy" },
                { value: "2+Yrs", label: "Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-lg sm:text-xl font-semibold text-gold">
                    {s.value}
                  </p>
                  <p className="text-xs text-obsidian-100/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <button
         onClick={scrollToServices}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold/40 hover:text-gold/80 transition-colors duration-300"
     aria-label="Scroll to services"
   >
        <span className="font-body text-xs tracking-[0.15em] uppercase">
       Scroll
     </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
     </button>
    </section>
  );
}
      
     
