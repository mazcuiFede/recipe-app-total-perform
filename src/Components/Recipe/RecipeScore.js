import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-flexbox-grid'
import putRecipeCalification from '../../services/putRecipeCalificationUrl'
import './styles.css'

class RecipeScore extends Component {
    constructor(props) {
        super(props);

        const { id } = this.props

        this.state = {
            id,
            rateValue: '1',
            messageRate: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange =(event) => {
        this.setState({rateValue: event.target.value});
      }
    
    handleSubmit() {
        let {id, rateValue } = this.state
        fetch(putRecipeCalification(id, rateValue))
        this.setState({
            messageRate: 'Your rate was sent!'
        })
    }
      
      render() {
        return (
            <Form>
                <Form.Group as={Row}>
                    <Col xs={8}>
                        <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col xs={4}>                        
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Send!
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <div className="green">{this.state.messageRate}</div>
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

RecipeScore.propTypes = {
    id: PropTypes.string.isRequired,
};

export default RecipeScore;