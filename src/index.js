import React from 'react';
import { render } from 'react-dom';
import App from './App';
import About from './About';
import Topics from './Topics';
import NoMatch from './NoMatch';

import { BrowserRouter, Match, Miss, Link} from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/about" component={About} />
				<Match pattern="/topics" component={Topics} />
				<Miss component={NoMatch} />

				<div className="nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>
				</div>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#root'));
