

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B5dCMHGU.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.kH_KrTu5.js"];
export const stylesheets = [];
export const fonts = [];
