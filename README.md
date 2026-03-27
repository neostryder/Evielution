# Evielution

A warm, map-like creative home for Evie's music, writing, games, worldbuilding, media, and works in progress.

## Why this exists

Evielution is meant to be a creative home base rather than a conventional portfolio. It gives Evie one place to gather lead sheets, journal-like writing, game concepts, sketches, and unfinished ideas, while still making the site feel playful and welcoming.

The first release is designed to:

- launch quickly on GitHub Pages
- feel good to explore on desktop and mobile
- separate Gallery material from Workshop material
- grow into a custom-domain site later without a structural rewrite

## Quick start

### Install dependencies

- Use Node.js 20 or newer.
- Install the project dependencies.

### Run locally

- Start the development server.
- Open the local URL shown by Astro.

### Build for production

- Run the production build.
- The output is written to `dist/`.

## Examples

### Current route layout

- `/` - map-style homepage
- `/music` - lead sheets and music shelf
- `/writing` - writing desk and article index
- `/games` - game concepts and mechanics shelf
- `/worldbuilding` - lore and connected settings
- `/media` - media room and future embeds
- `/workshop` - visible work-in-progress area
- `/about` - short site and creator framing
- `/contact` - placeholder contact strategy page

### Content examples

Starter content lives in Astro content collections:

- `src/content/projects/`
- `src/content/writing/`

## Inputs and outputs

### Inputs

- Markdown content in `src/content/projects/` and `src/content/writing/`
- Site configuration in `astro.config.mjs`
- Global styles in `src/styles/global.css`

### Outputs

- Static HTML, CSS, and JavaScript in `dist/`
- A deployable GitHub Pages artifact through `.github/workflows/deploy.yml`

## Assumptions

- The initial deployment target is the `neostryder` GitHub account.
- The first live URL is expected to be a project Pages URL for the `Evielution` repository.
- A custom domain will likely be attached later.
- Hidden-link sharing is acceptable for the first release.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow that builds the site and deploys `dist/` to GitHub Pages on pushes to `main`.

The current workflow is configured for project Pages under:

- `SITE_URL=https://neostryder.github.io`
- `SITE_BASE=/Evielution`

If the site moves to a custom domain later:

1. Update the workflow environment values.
2. Update `astro.config.mjs` if you want to switch the default base path behavior.
3. Add `public/CNAME` with the chosen domain.
4. Point the domain DNS at GitHub Pages.

## Content model

### Project collection

`src/content/projects/` entries currently use these fields:

- `title`
- `summary`
- `category`
- `status`
- `visibility`
- `featured`
- `tags`
- `callToAction`

### Writing collection

`src/content/writing/` entries currently use these fields:

- `title`
- `summary`
- `category`
- `visibility`
- `featured`
- `tags`
- `publishedAt`

## Limitations

- The first implementation uses starter placeholder content and structural examples.
- No real contact form or mailing-list workflow is included yet.
- No authentication or gated Workshop flow is included yet.
- The site is tuned for project-based GitHub Pages first, then custom domain second.

## Dependencies

- [Astro](https://astro.build/)

## License

No license has been selected yet. Choose one before publishing code meant for reuse.
