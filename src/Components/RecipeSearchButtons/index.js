import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row} from 'react-flexbox-grid'

class RecipeSearchButtons extends Component {
    render() {
        const {searchRecipesByRate} = this.props
        return (
            <>
                <Row>
                    <Col xs={12} sm={2}>
                        <button className="btn btn-success mr-3 mb-2 btn-block" onClick={() => searchRecipesByRate([4, 5])}>Best Recipes</button>
                    </Col>
                    <Col xs={12} sm={2}>
                        <button className="btn btn-danger mr-3 mb-2 btn-block" onClick={() => searchRecipesByRate([1, 2, 3])}>Worst Recipes</button>
                    </Col>
                    <Col xs={12} sm={2}>
                        <button className="btn btn-primary mb-2 btn-block" onClick={() => searchRecipesByRate([1, 2, 3, 4, 5])}>All scored recipes</button>
                    </Col>
                </Row>
            </>
        );
    }
}

RecipeSearchButtons.propTypes = {
    searchRecipesByRate: PropTypes.func.isRequired,
};

export default RecipeSearchButtons;