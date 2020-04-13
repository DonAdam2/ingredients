import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
//components
import IngredientsList from './js/components/IngredientsComponents/IngredientsList';

const App = (props) => {
	return <IngredientsList />;
};

export default hot(App);
