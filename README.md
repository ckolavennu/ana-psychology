# Ana's website

Bilingual psychology website built with Next.js App Router and Tailwind CSS. English is at `/`; Spanish is at `/es/`. This is a preview: contact details, professional and benefits details, and the legal and privacy notices await Ana's approval. All pages are marked `noindex` while the site is a preview.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before publishing.

## Static export

`npm run build` writes the static site to `out/`. The Pages workflow gets the actual base path from `actions/configure-pages`, so it also works if the repository is renamed or uses a root Pages domain. For a local build matching the current repository, use:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/ana-psychology"
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Leave the variable unset for a root domain. The setting prefixes both Next.js links and the photos in `public/images/ana/`; rebuild when it changes. `basePath` handles Next.js assets, so `assetPrefix` is not needed for this Pages site. Trailing slashes produce route directories with `index.html` for direct navigation and refresh. `public/.nojekyll` is copied into `out/`.

## GitHub Pages

In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. Push to `main` or run **Deploy preview to GitHub Pages** manually. The workflow runs lint, TypeScript, and the static build on Ubuntu, verifies every existing route and `.nojekyll`, and deploys `out/` with GitHub's official Pages Actions. Check the workflow result before treating deployment as successful.

Before treating the site as final, Ana needs to confirm contact details and availability, professional background and service claims, the stated DLA/PIP age ranges, and the content of the legal and privacy pages. The welfare benefits service must remain separate from psychology services. Once approved, remove the preview notice and `noindex` metadata.
