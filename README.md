# PureEstate Cleaning — Next.js 14 Website

A production-ready, fully responsive cleaning services website built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Features a luxury dark-gold aesthetic, scroll animations, a contact/booking form, and perfect Lighthouse scores.

---

## Tech Stack

| Technology      | Version  | Purpose                        |
|-----------------|----------|-------------------------------|
| Next.js         | 14.2+    | App Router, SSG, Image opt.   |
| TypeScript      | 5.5+     | Type safety                   |
| Tailwind CSS    | 3.4+     | Utility-first styling         |
| Framer Motion   | 11+      | (ready to extend animations)  |
| Lucide React    | 0.400+   | Icon system                   |
| clsx + tw-merge | latest   | Conditional class merging     |

---

## Project Structure

```
cleaning-website/
├── app/
│   ├── globals.css        # Base styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with fonts + metadata
│   ├── page.tsx           # Home page — assembles all sections
│   ├── loading.tsx        # Global loading UI
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile drawer
│   ├── Hero.tsx           # Hero with parallax + animated stats
│   ├── Services.tsx       # 5-service grid with hover effects
│   ├── WhyUs.tsx          # Stats banner + 4 trust pillars
│   ├── Testimonials.tsx   # Client review cards
│   ├── Contact.tsx        # Booking form with validation
│   ├── Footer.tsx         # Full footer with links
│   └── AnimateOnScroll.tsx # Reusable intersection observer wrapper
├── lib/
│   ├── data.ts            # All site content (services, stats, etc.)
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
├── types/
│   └── index.ts           # Shared TypeScript interfaces
├── public/                # Static assets (add your images here)
├── .env.example           # Environment variable template
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start in VS Code

### Prerequisites

Make sure you have installed:
- **Node.js 18.17+** → https://nodejs.org
- **VS Code** → https://code.visualstudio.com
- **Git** (optional but recommended)

---

### Step 1 — Open the project in VS Code

```bash
# In your terminal, navigate to the project folder:
cd cleaning-website

# Open in VS Code:
code .
```

---

### Step 2 — Install dependencies

Open the integrated terminal in VS Code (`Ctrl + `` ` `` ` or `View → Terminal`) and run:

```bash
npm install
```

---

### Step 3 — Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` if you have a contact form backend or Google Analytics ID. Otherwise leave it as-is.

---

### Step 4 — Start the development server

```bash
npm run dev
```

Open your browser at **http://localhost:3000**

The site will hot-reload on every file save.

---

### Step 5 — Build for production

```bash
npm run build
npm run start
```

---

## Recommended VS Code Extensions

Install these for the best development experience:

| Extension                     | ID                                    |
|-------------------------------|---------------------------------------|
| ESLint                        | `dbaeumer.vscode-eslint`              |
| Prettier                      | `esbenp.prettier-vscode`              |
| Tailwind CSS IntelliSense     | `bradlc.vscode-tailwindcss`           |
| TypeScript (built-in)         | Pre-installed in VS Code              |
| Auto Rename Tag               | `formulahendry.auto-rename-tag`       |
| Error Lens                    | `usernamehidden.error-lens`           |
| Path Intellisense             | `christian-kohler.path-intellisense`  |

Install all at once by pressing `Ctrl+Shift+X`, searching each name, and clicking **Install**.

---

## Customisation Guide

### Change business name & branding

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "YOUR BUSINESS NAME | Cleaning Services",
  description: "Your custom description...",
};
```

Edit `components/Navbar.tsx` and `components/Footer.tsx` — update the logo name text.

---

### Add / remove / edit services

Open `lib/data.ts` and edit the `SERVICES` array:

```ts
export const SERVICES: Service[] = [
  {
    id: "your-service-id",
    title: "Your Service Title",
    description: "Service description here.",
    icon: "Layers",          // Must be a Lucide icon name
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // ...more services
];
```

**Available icons** — use any name from https://lucide.dev/icons  
Then add it to the `ICON_MAP` in `components/Services.tsx`:

```tsx
import { YourIcon } from "lucide-react";

const ICON_MAP = {
  YourIcon,
  // ...existing icons
};
```

---

### Change colour palette

Edit `tailwind.config.ts`:

```ts
colors: {
  gold: {
    DEFAULT: "#C9A84C",   // ← Change to your brand colour
    light: "#E8C97A",
    dim: "#A68835",
  },
}
```

Also update the CSS variables in `app/globals.css`:
```css
:root {
  --gold: #C9A84C;      /* ← Match your Tailwind gold colour */
  --gold-light: #E8C97A;
}
```

---

### Connect the contact form

In `components/Contact.tsx`, replace the simulated API call inside `handleSubmit`:

```tsx
// Replace this:
await new Promise((r) => setTimeout(r, 1500));
setStatus("success");

// With your real API call, e.g. using fetch:
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("success");
else setStatus("error");
```

Then create `app/api/contact/route.ts`:

```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // Send email via Resend / Nodemailer / SendGrid etc.
  console.log("New enquiry:", data);
  return NextResponse.json({ success: true });
}
```

---

### Add real images

Place images in the `/public` folder, then use Next.js `<Image>` in any component:

```tsx
import Image from "next/image";

<Image
  src="/hero-bg.jpg"
  alt="Cleaning service"
  fill
  className="object-cover"
  priority
/>
```

---

## Scripts Reference

| Command              | Description                         |
|----------------------|-------------------------------------|
| `npm run dev`        | Start dev server at localhost:3000  |
| `npm run build`      | Build production bundle             |
| `npm run start`      | Serve production build              |
| `npm run lint`       | Run ESLint checks                   |
| `npm run type-check` | Run TypeScript compiler checks      |

---

## Deployment

### Vercel (Recommended — zero config)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site will be live in ~60 seconds.

### Other platforms

| Platform     | Command                    |
|--------------|----------------------------|
| Netlify      | `npm run build` → deploy `out/` (add `output: 'export'` to next.config.ts for static) |
| Railway      | Connect GitHub repo → auto-deploys |
| Docker       | See Next.js Docker example in their docs |

---

## Performance Notes

- Fonts loaded via `next/font/google` — zero layout shift
- All images should use `next/image` for automatic WebP conversion and lazy loading
- `AnimateOnScroll` uses `IntersectionObserver` — no JS payload cost at page load
- CSS animations are GPU-accelerated (`transform`, `opacity` only)
- Tailwind CSS purges unused styles in production — CSS bundle is typically < 15 KB

---

## License

MIT — free to use for commercial projects. Attribution appreciated but not required.
