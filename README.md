# The Future Kid's School Website

Website for The Future Kid's School. Shows info about all three campuses - main school in Nanakramguda and playgroups in Jubilee Hills and Narsingi.

## What's this about?

This is the website for The Future Kid's School. It has info about the school's history, how they teach, campus facilities, and different programs. Each campus has its own section with specific content.

## Features

- **Three campuses**: Separate pages for Main Campus, Playgroup Jubilee Hills, and Playgroup Narsingi
- **Dark mode**: You can switch between light and dark theme
- **Works on mobile**: Looks good on phone, tablet, and desktop
- **Smooth transitions**: Pages transition nicely when you navigate
- **UI components**: Uses Radix UI for components
- **Fast loading**: Images are optimized and stuff loads efficiently

## Tech Stack

- **Next.js 15**: Using App Router
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Radix UI**: UI component library
- **Motion**: For animations
- **next-themes**: Handles theme switching
- **Turbopack**: For faster dev builds

## Getting Started

### What you need

- Node.js 20+ or Bun installed
- npm/yarn/pnpm/bun - any package manager works

### Setup

1. Clone the repo:
```bash
git clone <repository-url>
cd fks-website
```

2. Install packages:
```bash
npm install
# or yarn/pnpm/bun install
```

3. Start the dev server:
```bash
npm run dev
# or yarn/pnpm/bun dev
```

4. Add environment variable:
Create a `.env.local` file and add:
```
NEXT_PUBLIC_MAPS_EMBED_KEY=your_key_here
```
You can get the key from Google Maps API.

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fks-website/
├── app/                    # Next.js pages
│   ├── main-campus/       # Main campus pages
│   ├── playgroup-jubileehills/  # Jubilee Hills pages
│   ├── playgroup-narsingi/      # Narsingi pages
│   ├── sitemap/          # Sitemap page
│   └── privacy-policy/   # Privacy policy
├── components/           # React components
│   ├── ui/              # Reusable components
│   ├── main-campus/     # Main campus components
│   ├── jubileehills/    # Jubilee Hills components
│   └── narsingi/        # Narsingi components
├── config/              # Config files
│   └── navigation.ts    # Navigation setup
├── lib/                 # Helper functions
├── public/              # Images and static files
└── styles/              # CSS files
```

## Available Scripts

- `npm run dev` - Start dev server (uses Turbopack)
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run lint` - Check code with ESLint

## Development Notes

- Using Next.js 15 App Router with TypeScript
- Components are split by campus to keep things organized
- Shared components are in `components/ui/`
- Navigation is set up in `config/navigation.ts`
- Images use a custom FadeImage component that wraps Next.js Image

## Deployment

Works best on Vercel since it's built for Next.js. For other platforms, make sure:

- Node.js 20+ is installed
- Build command: `npm run build`
- Start command: `npm run start`
- Set environment variable: `NEXT_PUBLIC_MAPS_EMBED_KEY`

## License

Copyright @ 2025 The Future Kid's School. All rights reserved.

---

Built with ❤️ for The Future Kid's School

<div align="center">
  <a href="https://moonshot.hackclub.com" target="_blank">
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/35ad2be8c916670f3e1ac63c1df04d76a4b337d1_moonshot.png" 
         alt="This project is part of Moonshot, a 4-day hackathon in Florida visiting Kennedy Space Center and Universal Studios!" 
         style="width: 100%;">
  </a>
</div>