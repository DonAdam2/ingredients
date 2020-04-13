import React from 'react';
//components
import Card from '../UI/Card';

const Search = React.memo((props) => {
	return (
		<section className="search">
			<Card>
				<div className="search-input">
					<label>Filter by Title</label>
					<input type="text" />
				</div>
			</Card>
		</section>
	);
});

export default Search;
