import React, { Component } from 'react';
import hogs from '../porkers_data';
import { render } from 'react-dom';

export default class Hog extends React.Component{
 
    state = {
        clicked: false
    }

handleClick = (evt) => {
this.setState({clicked:true})

}

render() {
    let pigImage = require('../hog-imgs/piggy_smalls.jpg')
    console.log(this.props)
    console.log(this.state, "<--state")
    return (
<div className="ui eight wide column" onClick={this.handleClick}>
    <img src={pigImage}/>
    <h3>{this.props.hog.name}</h3>

    {this.state.clicked ? 
    <div><p>Specialty: {this.props.hog.specialty}</p>
    <p>Weight: {this.props.hog.weight}</p>
    <p>Greased: {this.props.hog.greased}</p>
    <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
    <br/>
    </div>
: null}
</div> 

    )}

}
