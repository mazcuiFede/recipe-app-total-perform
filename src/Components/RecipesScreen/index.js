import React, { Component } from 'react';
import RecipeList from '../RecipeList'
import RecipeSearch from '../RecipeSearch'
import { Col, Row} from 'react-flexbox-grid'
import average from '../../services/operations'
import getRecipesUrl from '../../services/getRecipesUrl'
import RecipeSearchButtons from './../RecipeSearchButtons'

class Recipes extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
        this.searchRecipesByRate = this.searchRecipesByRate.bind(this)
    }

    searchRecipes = (e) => {
        fetch(getRecipesUrl(e.target.value)).then( resolve => {
            return resolve.json()
        }).then(data => {
            this.setState({
                data
            })
        })
    }

    componentDidMount(){
        fetch(getRecipesUrl()).then( resolve => {
            return resolve.json()
        }).then(data => {
            this.setState({
                data
            })
        })
    }

    searchRecipesByRate (ary) {
        let dataResult = []

        fetch(getRecipesUrl()).then( resolve => {
            return resolve.json()
        }).then(data => {
            
            data.recipes.map(recipe => 
            {
                if (ary.includes(parseInt(average(recipe.calification))))
                    dataResult.push(recipe)
                
                return null
            })
            
            data.recipes = dataResult

            this.setState({
                data
            })
        })
    }

    render() {
        const { data } = this.state
        return (
            <>
                <Row>
                    <Col md={12}>
                        <RecipeSearch searchRecipes={this.searchRecipes}></RecipeSearch>
                        <RecipeSearchButtons searchRecipesByRate={this.searchRecipesByRate}></RecipeSearchButtons>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12}>
                        <h2 className="mb-3 mt-4">List of recipes</h2>
                    </Col>
                </Row>
                <Row>
                    <RecipeList data={data}></RecipeList>
                </Row>
            </>
        );
    }
}


export default Recipes;