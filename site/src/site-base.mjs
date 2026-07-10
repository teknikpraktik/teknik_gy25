// Webbplatsens base path — projektet publiceras på GitHub Pages under
// https://teknikpraktik.github.io/teknik_gy25/ och ligger alltså inte på
// domänroten. Konstanten delas av astro.config.mjs (base), remark-pluginens
// länkbyggen och de genererade vyerna, så att alla interna länkar fungerar
// både lokalt (astro dev/preview serverar under samma prefix) och på Pages.
// import.meta.env.BASE_URL kan inte användas i remark-pluginen, som laddas i
// Node-kontext av astro.config innan Vite-miljön finns.

export const SITE_BASE = '/teknik_gy25';

export function medBase(p) {
	return `${SITE_BASE}${p}`;
}
