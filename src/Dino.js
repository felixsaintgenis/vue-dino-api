import React, { Component } from 'react';
import logo from './logo.svg';
import './Dino.css';

class Dino extends Component {


  render() {
    return (

      <div className="dinoCool">
    <img src={this.props.img}></img>
   <h1>{this.props.race}</h1>
    <p>habitat: {this.props.habitat}</p>
     <p>alimentation: {this.props.alimentation}</p>
      <p>reproduction: {this.props.reproduction}</p>
      </div>
    );
  }
}

export default Dino;
