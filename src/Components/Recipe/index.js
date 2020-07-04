import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-flexbox-grid'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import RecipeScore from './RecipeScore'
import Ingredients from './Ingredients'
import average from '../../services/operations'
import ReactStarRating from "react-star-ratings-component";
import './styles.css'

class Recipe extends Component {

    constructor(props){
        super(props)
        const { name, ingredients, imageURL, steps, calification, _id } = props.recipe

        this.state = {
            showModal: false,
            id: _id,
            name,
            ingredients,
            imageURL,
            steps,
            calification: average(calification),
            servings: 1
        }

    }

    handleModal(showModal){
        this.setState( { showModal })
    }
    

    render() {
        const {imageURL, name, ingredients, showModal, calification, steps, id, servings} = this.state
        return (
            <>
                <Col xs={12} sm={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title>{ name }</Card.Title>

                            <Ingredients ingredients={ingredients} servings={servings}></Ingredients>
                            <Button variant="primary" className="mr-3" onClick={() => {this.handleModal(true)}}>See Steps</Button>
                            <ReactStarRating
                                numberOfStar={5}
                                numberOfSelectedStar={calification}
                                colorEmptyStar="#AAA"
                                starSize="35px"
                                spaceBetweenStar="10px"
                                />
                        </Card.Body>
                    </Card>
                </Col>

                {/* Modal */}
                <Modal show={showModal} size="lg">
                    <Modal.Header>
                        <h2>{name}</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Steps:</p>
                        <p>{steps}</p>
                        <hr/>
                        <p>Did you like this recipe? <b>Rate it!</b></p>
                        <RecipeScore id={id} onRate={this.handleModal}></RecipeScore>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="mr-3" onClick={() => {this.handleModal(false)}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {/* End modal */}
            </>
        );
    }
}

Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.array.isRequired,
        imageURL: PropTypes.string.isRequired,
        steps: PropTypes.string.isRequired,
        calification: PropTypes.array.isRequired,
        _id: PropTypes.string.isRequired,
      })
};

export default Recipe;