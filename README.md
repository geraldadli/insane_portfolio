# Gerald Adli — Research Portfolio

A responsive scrollytelling portfolio built with React 18, Vite, Framer Motion, and CSS. Features light/dark themes, pinned research stories, scroll-linked illustrations, staged feature reveals, and a static reduced-motion alternative.

```sh
npm install
npm run dev
npm run build
```

The production output is `dist/`. Existing Vercel configuration is retained.

Read [IMPLEMENTATION.md](./IMPLEMENTATION.md) for the narrative structure, reusable components, motion settings, accessibility, and verification checklist.

- Story content: `src/data/projects.js`
- Pinned projects: `src/components/ProjectCard.jsx`
- Shared reveals: `src/components/motion/ScrollReveal.jsx`
- Story layout and motion: `src/styles/story.css`
- Base theme and typography: `src/index.css`

Content is based on the supplied CV. Illustrations are original concepts. Research destinations link to [Gerald's repository](https://github.com/geraldadli/research-portfolio) and Scholar profile.
