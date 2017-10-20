import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dino from './Dino';
var request = require('request');


class App extends Component {
  state={
    data:[],

  }

  componentDidMount=() => {
  request("http://localhost:3005", (err,res,body) => {this.setState({data:JSON.parse(body)})})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinosaure API</h1>
        </header>
      <div className="dinoWrapper">

        {this.state.data.map((dino) => {
              return(
                <Dino className="dinoStyle" key={dino._id} img={dino.src}
                      alimentation={dino.Alimentation}
                      habitat={dino.Habitat}
                      race={dino.Race}
                      reproduction={dino.Reproduction}



                    />
              )
            })
          }
      </div>
      </div>
    );
  }
}

export default App;
