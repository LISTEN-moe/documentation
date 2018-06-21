module.exports = {
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
					'api/requests'
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
