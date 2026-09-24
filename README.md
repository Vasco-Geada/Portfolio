# Vasco Geada — Portfolio

A personal portfolio built with Next.js, React, TypeScript, SCSS Modules and i18next. The site presents selected software engineering and applied AI work in Portuguese and English.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run typecheck
npm run build
```

## Architecture

```text
lang/                   Complete PT/EN translation catalogues and i18n helpers
pages/                  Next.js Pages Router routes
├── index.tsx            Home (`/`)
├── projects/index.tsx   Projects (`/projects`)
└── projects/[id]/       Localized project details (`/projects/:id`)
store/                  TypeScript contracts grouped by consumer
├── components/         Contracts owned by reusable components
└── Projects/           Contracts owned by project pages
src/
├── components/         Reusable design-system primitives
│   └── LandingPage/     Components composed by the home route
├── i18n/               React provider and typed translation hook
└── styles/             Global reset, tokens and colour system
public/projects/        Project artwork
```

The application uses the Next.js Pages Router. Every public route is represented by an `index.tsx` file inside its route directory. The framework entrypoints `pages/_app.tsx` and `pages/_document.tsx` provide the shared i18n provider, global styles and the localized document language. Landing-page sections are reusable components under `src/components/LandingPage/`, so Next.js does not expose them as routes.

Types live in `store/` beside the scope that owns them: page-specific contracts are grouped under that page's directory, while reusable component contracts live in `store/components/`. This structure is ready to accommodate page and component state management later without mixing those contracts into the routing layer.

The dependency direction is:

```text
store → lang
store → components
lang + components → pages
```

All visible copy, accessibility labels, metadata and project content live in `lang/pt.ts` and `lang/en.ts`. i18next selects the active catalogue, stores the language preference in a cookie and keeps the document language and server-rendered metadata aligned. Client-side language changes use `useRouter` from `next/router` to refresh the active route without changing its URL.

Project details are generated from the localized `projects` collection. Adding a project means extending both language catalogues with the same readable ID; the generic `/projects/[id]` route renders the supported `text`, `image`, `gallery` and `features` section variants.

## Content to replace before publishing

- Email, GitHub and LinkedIn values in `lang/pt.ts` and `lang/en.ts`
- `public/vasco-geada-cv.pdf`
- Experience organisations and dates in both language catalogues
- Project narratives, screenshots, repository URLs and live-demo URLs in both language catalogues

All CSS colour values—including shadows, translucent surfaces and gradients—are defined as custom properties in `src/styles/globals.scss`. SCSS Modules consume those tokens without hardcoded colours.
