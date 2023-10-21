

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0c5ff6d8.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cb27e8c1.js","_app/immutable/chunks/singletons.983d34dd.js"];
export const stylesheets = [];
export const fonts = [];
