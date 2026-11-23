# Portfolio

A simple one-page portfolio built with Next.js 14 and Tailwind CSS. It follows the system light/dark theme.

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Edit the content

All text lives in `app/page.tsx` (the `experience`, `projects`, `skills`, `certifications` and `links` constants at the top). Colours are CSS variables in `app/globals.css`. The photo is `public/profile.png`.

## Deploy

```bash
npm run build
```

Works out of the box on Vercel (static output, no environment variables).
