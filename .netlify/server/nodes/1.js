

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Ch9fwZQI.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.kH_KrTu5.js","_app/immutable/chunks/entry.B1hrcOiR.js"];
export const stylesheets = [];
export const fonts = [];
