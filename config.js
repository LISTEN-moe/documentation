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
				title: 'API',
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
