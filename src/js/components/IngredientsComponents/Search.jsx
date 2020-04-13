import React, { memo } from 'react';
//components
import Card from '../UI/Card';

const Search = memo((props) => {
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
