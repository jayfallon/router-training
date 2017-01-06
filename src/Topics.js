import React from 'react';
import { Match, Link } from 'react-router';
import Topic from './Topic';

const Topics = ({ pathname, pattern }) => (
	<div>
		Topics:

		<ul>
			<li>
				<Link to={`${pathname}/rendering`}>Rendering with React</Link>
			</li>
			<li><Link to={`${pathname}/components`}>Components</Link></li>
			<li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
		</ul>

		<Match pattern={`${pathname}/:topicId`} component={Topic} />

		<Match pattern={pathname} exactly render={() => (
			<h3>Please select a topic</h3>
		)} />
	</div>
)

export default Topics;
