import React, { memo, useState } from 'react';
//components
import Card from '../UI/Card';

const IngredientForm = memo(() => {
	const [enteredTitle, setEnteredTitle] = useState(''),
		[enteredAmount, setEnteredAmount] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
		// ...
	};

	return (
		<section className="ingredient-form">
			<Card>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label htmlFor="title">Name</label>
						<input
							type="text"
							id="title"
							value={enteredTitle}
							onChange={({ target: { value } }) => setEnteredTitle(value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={enteredAmount}
							onChange={({ target: { value } }) => setEnteredAmount(value)}
						/>
					</div>
					<div className="ingredient-form__actions">
						<button type="submit">Add Ingredient</button>
					</div>
				</form>
			</Card>
		</section>
	);
});

export default IngredientForm;
