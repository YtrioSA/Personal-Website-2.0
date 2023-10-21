export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Stellar-Escape.mp3","brain.gif","favicon.png","hacker.webp"]),
	mimeTypes: {".mp3":"audio/mpeg",".gif":"image/gif",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.ec9cdf76.js","app":"_app/immutable/entry/app.24414d55.js","imports":["_app/immutable/entry/start.ec9cdf76.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.983d34dd.js","_app/immutable/entry/app.24414d55.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cb27e8c1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
