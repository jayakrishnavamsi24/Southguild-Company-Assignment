export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D8blNfY4.js","app":"_app/immutable/entry/app.B6jlIido.js","imports":["_app/immutable/entry/start.D8blNfY4.js","_app/immutable/chunks/entry.B1hrcOiR.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.B6jlIido.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.kH_KrTu5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
