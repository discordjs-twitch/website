/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
self.addEventListener('install', () => {
	self.skipWaiting();
});

self.addEventListener('activate', () => {
	self.registration
		.unregister()
		.then(() => self.clients.matchAll())
		.then((clients) => {
			clients.forEach((client) => client.navigate(client.url));
		});
});
