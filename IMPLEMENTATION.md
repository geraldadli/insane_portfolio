# Scrollytelling implementation guide

The portfolio is a continuous narrative built with React, Framer Motion, and native CSS sticky positioning. The introductory statement and two featured projects use pinned scenes on suitable desktop screens. Every other content section reveals its headline, explanation, and supporting details as it enters view.

## 1. Run

```sh
npm install
npm run dev
npm run build
```

The production build is written to `dist/`. Deployment is unchanged.

## 2. Follow the story

1. **Introduction:** the headline gently recedes as the user leaves; the biography, links, and credentials enter in stages.
2. **Approach:** a pinned, full-screen statement illuminates three lines in sequence as the user scrolls.
3. **My Project Universe:** eight apps span Computer Festival (Show), Course Projects (Learn), and Dream Projects (Dream). Category introductions stay alongside the cards on tall desktop screens. Each card reveals its premise, workflow, description, and supplied demo link in sequence.
4. **Research & papers:** two featured papers tell three chapters: the question, the approach, and the evidence. The illustration stays alongside the scrolling copy and reveals annotations, then the reported result. Two further papers reveal their illustrations, explanations, and links separately.
5. **Skills & Tools:** four groups cover languages, machine learning, data visualization, and development platforms.
6. **Background:** the biography and publication figures lead into three toolkit stages and the community section.
7. **Contact:** the final headline, invitation, and contact actions enter in sequence.

## 3. Component map

| File                                     | Purpose                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/components/motion/ScrollReveal.jsx` | Reusable scroll-scrubbed reveal; lightweight touch reveal; static reduced-motion branch                 |
| `src/components/Statement.jsx`           | Pinned three-line approach statement                                                                    |
| `src/components/Projects.jsx`            | Three project groups and reusable app cards with staged reveals                                         |
| `src/data/projectUniverse.js`            | Eight user-supplied apps, workflows, optional URLs, and explicit research scope                         |
| `src/components/Research.jsx`            | Dedicated four-paper overview and existing research stories                                             |
| `src/styles/universe.css`                | Project cards, category layout, and responsive sticky introductions                                     |
| `src/components/ProjectCard.jsx`         | Three-chapter project story, sticky artwork, progress rail, chapter anchors, normal-flow fallback       |
| `src/components/ProjectVisual.jsx`       | Original scalable research illustrations; `.feature-mark` groups revealed during the approach chapter   |
| `src/data/projects.js`                   | Three chapters per featured project, pipeline labels, results, links, and further research descriptions |
| `src/styles/story.css`                   | Story spacing, sticky dimensions, scene transitions, mobile and reduced-motion layouts                  |
| `src/index.css`                          | Base typography, theme tokens, shared controls and page shell                                           |
| `src/hooks/useMediaQuery.js`             | Live media-query changes with listener cleanup                                                          |

`src/main.jsx` imports the base stylesheet, story stylesheet, then universe stylesheet. The CSS import order matters.

## 4. Configure a project

Each featured project has exactly three `chapters`, in question / approach / evidence order. A chapter contains `label`, `title`, `body`, and `visualLabel`. The approach chapter displays `pipeline`; the evidence chapter displays `metric`, `metricLabel`, and `context`.

The CV remains the source for personal information and reported metrics. The fourth publication follows the CV's EEG/cognitive description and links to Scholar; the repository's facial-expression implementation is not presented as the same experiment. Illustrations are labeled concepts, not actual evaluation screenshots.

## 5. How desktop motion works

Project stories use an untransformed layout wrapper as the scroll target:

```jsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start center", "end center"],
});
const scale = useTransform(
  scrollYProgress,
  [0, 0.45, 0.8, 1],
  [0.93, 1.08, 1, 1],
);
```

A native sticky column stays 105px from the top while three ordinary document sections scroll past. Each chapter reserves at least 76svh, providing time to read. Chapter boundaries are cached from their rendered heights and remeasured with ResizeObserver when content or viewport dimensions change, so the active chapter stays aligned even when text wraps. React state changes only at chapter boundaries; artwork scale, rotation, and the progress line use Motion values.

The visual frame remains stationary. Only the internal illustration scales and rotates. CSS transitions reveal `.feature-mark` annotations in the approach phase. In the evidence phase, the artwork dims and a result overlay appears. Scrolling backward returns through the same states. No wheel, touch, or keyboard scrolling is intercepted.

The approach statement reserves 200svh and pins its content for the scene; three lines brighten in sequence. To shorten the experience, reduce this height and the project chapter minimum height in `story.css`.

References: [Motion useScroll](https://motion.dev/docs/react-use-scroll), [CSS positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position).

## 6. Reuse the reveal

```jsx
import ScrollReveal from "./components/motion/ScrollReveal";

<ScrollReveal distance={36}>
  <h2>A headline worth pausing for.</h2>
  <p>The explanation that follows it.</p>
</ScrollReveal>;
```

On desktop, the element resolves from 36px below and half opacity to its final appearance between 96% and 62% of viewport height. Values follow scroll directly and reverse naturally. Use separate wrappers for content that should arrive at separate points. Avoid wrapping sticky ancestors in a transformed reveal; the measurement and pinned containers should stay untransformed.

## 7. Mobile, short viewports, and reduced motion

- Pinned scenes require at least 900px width, 660px height, a fine pointer, and no reduced-motion preference. Short desktop windows and touch tablets receive the normal-flow story.
- Mobile uses one-time 550ms opacity/14px reveals. It mounts no pinned project or statement scroll trackers. The hero remains in normal flow without parallax.
- All three chapters remain visible and readable in document order in every mode. Below 768px the story is one column; wider static layouts use three columns.
- Reduced motion mounts plain elements instead of reveal or pinned animation components. System preference changes are handled live. CSS also removes transitions and smooth anchor scrolling.
- Image space is reserved and only transforms/opacity animate. User-triggered research disclosures intentionally expand their content.
- `Skip to project links` bypasses each long story. Native chapter links support keyboard access and direct links. Research notes use `<details>` / `<summary>`.
- Focused reveals become fully opaque and untransformed. Heading order and content are semantic; decorative overlays and progress visuals are hidden from assistive technology. No hidden duplicate text is required for the narrative.

## 8. Verification

Run `npm run build`, then check:

- Desktop: scroll and reverse through all three phases of both projects. The pinned frame should stay stable while the artwork and result change.
- Click chapter links and skip links. Open research notes with Enter.
- Phone: at 320px and 390px, confirm there is no horizontal overflow and all six chapters are present.
- Short desktop viewport: confirm the page uses the static layout instead of clipped sticky scenes.
- Enable Reduce Motion: verify all content remains visible without parallax, pinning, or reveal transitions.
- Switch themes and reload to confirm persistence.

Projects, Research, and Skills & Tools have separate header anchors. Research retains the four-paper overview and existing story anchors. Project apps use descriptive IDs and only show external actions when a URL is supplied. Owi Detector explicitly distinguishes comment collection and labeling from its future validated-detection goal. Edit app content in `src/data/projectUniverse.js`; edit paper content in `src/data/projects.js`.

App cards reuse ScrollReveal, so content stays in document order with no layout-size animation. Category introductions pin only on fine-pointer screens at least 900px wide and 760px high without reduced motion. Touch, short-screen, and reduced-motion layouts remain in normal flow. The five header destinations share a second row on narrow phones.

The original Experience and Education files remain in the repository but are not mounted; background information is consolidated in the active About section.
