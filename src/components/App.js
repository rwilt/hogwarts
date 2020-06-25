import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Hog from "./Hog";

class App extends Component {

  state = {
    hogList: hogs,
    filterClicked: false
  }

  renderHog = () => {
  if (this.state.filterClicked === true){
    let hogArr = hogs.filter((hog) => {
      return hog.greased === true
    })
    return hogArr.map((hog) =>{
      return ( <Hog
      hog = {hog}
      key = {hog.id}
      />)
    })
  }

  else {
  return hogs.map((hog)=>{
    return (  <Hog
      hog = {hog}
      key = {hog.id}
      /> )
    })
  }
  }

  handleClick = (evt) => {
    this.setState({filterClicked:true})
  }
  

  render() {
    
    return (
      <div className = {"ui grid container" && "App"} >
        <Nav 
        handleClick = {this.handleClick}/>
        {this.renderHog()}
      </div>
    );
  }
}

export default App;
