import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.f8b1d2a7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cb27e8c1.js"];
export const stylesheets = ["_app/immutable/assets/2.6692f7e7.css"];
export const fonts = [];
