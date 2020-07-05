import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import RecipesScreen from './Components/RecipesScreen'
import { Col, Row} from 'react-flexbox-grid'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
          <Container>
              <Row className="text-center">
                <Col xs={12}>
                  <div className="jumbotron">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Welcome to <b className="black">Recipe App</b></h1>
                    <p>All you need is a good recipe!</p>
                  </div>
                </Col>
              </Row>
              <RecipesScreen></RecipesScreen>
          </Container>

          <div className="footer text-center">
              <p className="pt-2">Made with <span className="red">❤</span> by <a href="https://www.linkedin.com/in/matias-azcui-1367b086/">MatiasF.Azcui</a></p>
          </div>

      </header>
    </div>
  );
}

export default App;
