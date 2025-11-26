/* empty css                                  */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderHead, d as renderTemplate } from '../chunks/astro/server_BbCgkXLy.mjs';
import { H as Head } from '../chunks/Head_vKF4jHst.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`<html lang="en" class="w-full h-full"> <head>${renderComponent($$result, "Head", Head, {})}<!-- Standard SEO Meta Tags --><meta name="theme-color" content="#0f0f0f"><meta name="description" content="A modern, fast portfolio built with Astro and React."><meta property="og:title" content="Portfolio | Luxe Lookbook"><meta property="og:description" content="Explore a curated collection of fashion design projects and creative work."><meta property="og:type" content="website"><meta property="og:site_name" content="Luxe Lookbook">${renderHead()}</head> <body class="w-full h-full bg-black text-white"> <noscript class="p-4 text-center text-sm opacity-70">
JavaScript is disabled — the interactive sections of this site won’t load.
</noscript> <main id="root" class="w-full h-full opacity-0 animate-fadeIn"> ${renderComponent($$result, "AppRouter", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Router", "client:component-export": "default" })} </main>
---
import ${Head} from "@/components/Head";
import AppRouter from "@/components/Router";
import "@/styles/global.css";

export const prerender = false;
---
${renderComponent($$result, "Head", Head, {})} <!-- Standard SEO Meta Tags --> <meta name="theme-color" content="#0f0f0f"> <meta name="description" content="A modern, fast portfolio built with Astro and React."> <meta property="og:title" content="Portfolio | Luxe Lookbook"> <meta property="og:description" content="Explore a curated collection of fashion design projects and creative work."> <meta property="og:type" content="website"> <meta property="og:site_name" content="Luxe Lookbook"> <noscript class="p-4 text-center text-sm opacity-70">
JavaScript is disabled — the interactive sections of this site won’t load.
</noscript> <main id="root" class="w-full h-full opacity-0 animate-fadeIn"> ${renderComponent($$result, "AppRouter", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Router", "client:component-export": "default" })} </main> </body></html>`;
}, "/workspaces/luxe-lookbook-main-new/src/pages/[...slug].astro", void 0);

const $$file = "/workspaces/luxe-lookbook-main-new/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
