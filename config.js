docute.init({
	url: '.',
	debug: true,
	nav: {
		default: [
			{
				title: 'Home',
				path: '/'
			},
			{
				title: 'API v3',
				type: 'dropdown',
				items: [
					{
						title: 'Auth',
						path: '/oldapi/auth'
					},
					{
						title: 'Favorites',
						path: '/oldapi/favorites'
					},
					{
						title: 'Requests',
						path: '/oldapi/requests'
					},
					{
						title: 'Users',
						path: '/oldapi/users'
					},
					{
						title: 'Websocket',
						path: '/oldapi/websocket'
					}
				]
			},
			{
				title: 'API v4',
				type: 'dropdown',
				items: [
					{
						title: 'Base',
						path: '/api/base'
					},
					{
						title: 'Auth',
						path: '/api/auth'
					},
					{
						title: 'Favorites',
						path: '/api/favorites'
					},
					{
						title: 'Songs',
						path: '/api/songs'
					},
					{
						title: 'Users',
						path: '/api/users'
					}
				]
			}
		]
	}
});
