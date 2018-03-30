/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
	title: 'LISTEN.moe Documentation',
	tagline: '',
	url: 'https://listen.moe',
	baseUrl: '/',
	organizationName: 'LISTEN-moe',
	projectName: 'documentation',
	headerLinks: [
		{ doc: 'getting_started_1', label: 'Docs' },
		{ blog: true, label: 'Blog' },
	],
	/* path to images for header/footer */
	headerIcon: 'img/logo.png',
	footerIcon: 'img/logo.png',
	favicon: 'img/favicon.png',
	onPageNav: 'separate',
	/* colors for website */
	colors: {
		primaryColor: '#131524',
		secondaryColor: '#205C3B',
	},
	editUrl: "https://github.com/LISTEN-moe/documentation/edit/master/docs/",
	/* custom fonts for website */
	/*fonts: {
		myFont: [
			"Times New Roman",
			"Serif"
		],
		myOtherFont: [
			"-apple-system",
			"system-ui"
		]
	},*/
	copyright:
		'Copyright © ' +
		new Date().getFullYear() +
		' LISTEN.moe',
	highlight: {
		theme: 'hopscotch',
	}
};

module.exports = siteConfig;
