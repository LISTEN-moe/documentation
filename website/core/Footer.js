/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
	docUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
	}

	pageUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		return baseUrl + (language ? language + '/' : '') + doc;
	}

	render() {
		const currentYear = new Date().getFullYear();
		return (
			<footer className="nav-footer" id="footer">
				<section className="sitemap">
					<a href={this.props.config.baseUrl} className="nav-home">
						{this.props.config.footerIcon && (
							<img
								src={this.props.config.baseUrl + this.props.config.footerIcon}
								alt={this.props.config.title}
								width="66"
								height="58"
							/>
						)}
					</a>
					<div>
						<h5>Docs</h5>
						<a href={this.docUrl('getting_started_1.html', this.props.language)}>
							Getting Started
						</a>
						<a href={this.docUrl('websocket_1.html', this.props.language)}>
							Websocket
						</a>
						<a href={this.docUrl('api_1.html', this.props.language)}>
							API Reference
						</a>
					</div>
					<div>
						<h5>Community</h5>
						<a href="https://discordapp.com/">Project Chat</a>
						<a href="https://twitter.com/" target="_blank">
							Twitter
						</a>
					</div>
					<div>
						<h5>More</h5>
						<a href={this.props.config.baseUrl + 'blog'}>Blog</a>
						<a href="https://github.com/">GitHub</a>
					</div>
				</section>
			</footer>
		);
	}
}

module.exports = Footer;
