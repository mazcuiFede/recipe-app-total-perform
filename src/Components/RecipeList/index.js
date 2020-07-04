import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Recipe from '../Recipe'
import PropTypes from 'prop-types';

class RecipeList extends Component {
    render() {
        const {data} = this.props
        return (
            <>
                { data && data.recipes ? data.recipes.map((recipe) => ( <Recipe recipe={recipe} key={recipe.name}></Recipe> )) : <CircularProgress size={80} /> }
            </>
        );
    }
}

RecipeList.propTypes = {
     data: PropTypes.shape({
         recipes: PropTypes.array,
       })
  };

export default RecipeList;