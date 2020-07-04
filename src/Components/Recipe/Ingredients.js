import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

class Ingredients extends Component {
    constructor(props){
        super(props)
        const { ingredients } = this.props
        this.state = ({
            servings: 1,
            ingredients
        })
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({servings: event.target.value});
    }
    
    render() {
        return (
            <div>
                <Card.Text>
                    Servings:
                    <input type="number" className="ml-2" onChange={this.handleChange}/> 
                </Card.Text>
                <Card.Body> 
                <Card.Text>To make this recipe you will need:</Card.Text>
                    <ul>
                        { this.state.ingredients.map((recipe) => <li key={recipe.name}>{`${recipe.quantity * this.state.servings} ${recipe.unit} of ${recipe.name}`}</li>)}
                    </ul>
                </Card.Body>
            </div>
        );
    }
}

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default Ingredients;