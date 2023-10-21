import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const global = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-7vxf1f_START -->${$$result.title = `<title>YSA.dev</title>`, ""}<!-- HEAD_svelte-7vxf1f_END -->`, ""}  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
