import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Background blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-7 h-7 text-gold" />
        </div>

        <p className="font-display text-8xl font-semibold gold-shimmer mb-4">
          404
        </p>
        <h1 className="font-display text-3xl font-light text-obsidian-50 mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-sm text-obsidian-100/50 max-w-xs mx-auto mb-10">
          The page you&apos;re looking for has been moved or doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold-gradient text-obsidian-950 font-semibold font-body text-sm hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
