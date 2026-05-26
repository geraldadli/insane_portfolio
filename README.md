# Gerald Adli — Portfolio

Data Scientist portfolio built with React + Vite. Designed for Vercel deployment.

## Stack

- **React 18** + **Vite 5**
- Zero external CSS frameworks — pure CSS-in-JS inline styles
- Google Fonts: Fraunces · IBM Plex Mono · DM Sans

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect the Vite framework.

### Option B — Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework preset: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** ✓

## Customization

| What | Where |
|---|---|
| Color scheme | `src/index.css` → `:root` CSS variables |
| Personal data | Individual section components in `src/components/` |
| Fonts | `index.html` Google Fonts link + `src/index.css` |
| Projects section | Add a new `Projects.jsx` and import in `App.jsx` |

## Add a Projects Section

When you have projects to showcase, create `src/components/Projects.jsx`
and import it in `App.jsx` between Skills and Experience. Each project card should
include: title, description, tech stack tags, GitHub link, and a live demo link.
