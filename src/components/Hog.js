import React, { Component } from 'react';
import hogs from '../porkers_data';
import { render } from 'react-dom';

export default class Hog extends React.Component{
 
    state = {
        clicked: false,
        hidden: false
    }

handleClick = (evt) => {
    this.setState({clicked:true})
}
    
handleHide = () => {
    this.setState({
        hidden: true
    })
}
    
handleShow = () => {
    this.setState({
        hidden: false
    })
}

render() {
    let pigName = this.props.hog.name
    pigName = pigName.split(" ").join("_").toLowerCase()

    let pigImage = require(`../hog-imgs/${pigName}.jpg`)

    return (
    this.state.hidden ? <div><button onClick={this.handleShow}>Show This Hog</button><br/><br/></div> :
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
    <button onClick={this.handleHide} >Hide This Hog</button>
    <br/><br/><br/>
</div> 
    )}

}
