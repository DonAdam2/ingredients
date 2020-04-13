import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
//components
import LoadingIndicator from './js/components/UI/LoadingIndicator';
const IngredientsList = lazy(() => import('./js/components/IngredientsComponents/IngredientsList'));

const App = (props) => {
	return (
		<Suspense
			fallback={
				<div className="loader-wrapper">
					<LoadingIndicator />
				</div>
			}
		>
			<IngredientsList />
		</Suspense>
	);
};

export default hot(App);
