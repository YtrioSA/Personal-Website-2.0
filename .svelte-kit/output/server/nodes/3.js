

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.32c9657a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cb27e8c1.js"];
export const stylesheets = [];
export const fonts = [];
