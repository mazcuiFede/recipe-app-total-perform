import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types';

class RecipeSearch extends Component {

    render() {
        const {searchRecipes} = this.props
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search recipes" onChange={searchRecipes} />
                </Form.Group>
            </Form>
        );
    }
}

RecipeSearch.propTypes = {
    searchRecipes: PropTypes.func.isRequired,
};

export default RecipeSearch;