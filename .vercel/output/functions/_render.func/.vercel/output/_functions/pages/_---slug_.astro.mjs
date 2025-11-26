/* empty css                                  */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderHead, d as renderTemplate } from '../chunks/astro/server_BbCgkXLy.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const Head = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#0f0f0f" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "A modern portfolio showcasing creative projects, design work, and visual stories." }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: "portfolio, design, fashion, projects, creative work" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Portfolio" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore a curated collection of projects and creative work." }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: "/og-default.jpg" }),
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://static.parastorage.com" }),
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
    /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", href: "/favicon.ico", sizes: "48x48" }),
    /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: typeof window !== "undefined" ? window.location.href : "" })
  ] });
};

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`<html lang="en" class="w-full h-full"> <head>${renderComponent($$result, "Head", Head, {})}<!-- Standard SEO Meta Tags --><meta name="theme-color" content="#0f0f0f"><meta name="description" content="A modern, fast portfolio built with Astro and React."><meta property="og:title" content="Portfolio | Luxe Lookbook"><meta property="og:description" content="Explore a curated collection of fashion design projects and creative work."><meta property="og:type" content="website"><meta property="og:site_name" content="Luxe Lookbook">${renderHead()}</head> <body class="w-full h-full bg-black text-white"> <noscript class="p-4 text-center text-sm opacity-70">
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
