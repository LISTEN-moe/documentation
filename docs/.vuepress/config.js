module.exports = {
	title: 'Docs',
	description: 'Documentation for everything API and WebSocket related to LISTEN.moe',
	head: [
		[ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://listen.moe/public/images/icons/apple-touch-icon.png' } ],
		[ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://listen.moe/public/images/icons/favicon-32x32.png' } ],
		[ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://listen.moe/public/images/icons/favicon-16x16.png' } ],
		[ 'link', { rel: 'manifest', href: 'https://listen.moe/public/images/icons/manifest.json' } ],
		[ 'link', { rel: 'mask-icon', color: '#FF015B', href: 'https://listen.moe/public/images/icons/safari-pinned-tab.svg' } ],
		[ 'link', { rel: 'shortcut icon', href: 'https://listen.moe/public/images/icons/favicon.ico' } ],
		[ 'meta', { property: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'LISTEN.moe Docs' } ],
		[ 'meta', { property: 'application-name', name: 'application-name', content: 'LISTEN.moe Docs' } ],
		[ 'meta', { property: 'msapplication-config', name: 'msapplication-config', content: 'https://listen.moe/public/images/icons/browserconfig.xml' } ],
		[ 'meta', { property: 'twitter:card', name: 'twitter:card', content: 'summary' } ],
		[ 'meta', { property: 'twitter:site', name: 'twitter:site', content: '@LISTEN_moe' } ],
		[ 'meta', { property: 'twitter:creator', name: 'twitter:creator', content: '@LISTEN_moe' } ],
		[ 'meta', { property: 'twitter:title', name: 'twitter:title', content: `LISTEN.moe Docs` } ],
		[ 'meta', { property: 'twitter:description', name: 'twitter:description', content: 'Documentation for everything API and WebSocket related to LISTEN.moe' } ],
		[ 'meta', { property: 'twitter:image', name: 'twitter:image', content: 'https://listen.moe/public/images/share.jpg' } ],
		[ 'meta', { property: 'og:url', property: 'og:url', content: 'https://docs.listen.moe' } ],
		[ 'meta', { property: 'og:type', property: 'og:type', content: 'website' } ],
		[ 'meta', { property: 'og:title', property: 'og:title', content: `LISTEN.moe Docs` } ],
		[ 'meta', { property: 'og:description', property: 'og:description', content: 'Documentation for everything API and WebSocket related to LISTEN.moe' } ],
		[ 'meta', { property: 'og:image', property: 'og:image', content: 'https://listen.moe/public/images/share.jpg' } ],
		[ 'meta', { property: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://listen.moe/public/images/share.jpg' } ],
		[ 'meta', { property: 'og:site_name', property: 'og:site_name', content: 'LISTEN.moe Docs' } ]
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'API Docs', link: '/api' },
			{ text: 'WebSocket Docs', link: '/websocket' },
			{ text: 'LISTEN.moe', link: 'https://listen.moe' }
		],
		lastUpdated: 'Last Updated',
		sidebar: [
			'/',
			{
				title: 'API',
				collapsable: false,
				children: [
					'api/',
					'api/account',
					'api/songs',
					'api/favorites',
					'api/requests',
					'api/artists',
					'api/users',
					'api/posts',
					'api/feeds'
				]
			},
			{
				title: 'WebSocket',
				collapsable: false,
				children: [
					'ws/',
					'ws/spec',
					'ws/usage',
				]
			}
		],
		sidebarDepth: 2
	}
}
