import React from 'react';
import './App.css';

const NoMatch = ({ location }) => (
	<div>
		<h2>Whoops for a 404</h2>
		<p>Sorry but {location.pathname} didn match.</p>
	</div>
)

export default NoMatch;
