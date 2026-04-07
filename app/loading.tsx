export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
        <p className="font-body text-xs text-obsidian-100/40 tracking-[0.2em] uppercase">
          Loading…
        </p>
      </div>
    </div>
  );
}
