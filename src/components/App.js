import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Hog from "./Hog";

class App extends Component {

  state = {
    hogList: hogs,
    filterClicked: false,
    sortByName: false,
    sortByWeight: false
  }

  renderHog = () => {
    if (this.state.filterClicked === true) {
    
      if (this.state.sortByName === true) {
        const sortedArr = this.state.hogList.sort(this.compareName);

        return sortedArr.map((hog) => {
          return (<Hog
            hog={hog}
            key={hog.name}
          />)
        })
      }

      else {
        return this.state.hogList.map((hog) => {
          return (<Hog
            hog={hog}
            key={hog.name}
          />)
        })
      }
  }
    
  else if (this.state.sortByName === true) {
    const sortedArr = this.state.hogList.sort(this.compareName);

    return sortedArr.map((hog) =>{
      return ( <Hog
      hog = {hog}
      key = {hog.name}
      />)
    })
  }
    
  else if (this.state.sortByWeight === true) {
    const sortedArr = this.state.hogList.sort(this.compareWeight);

    return sortedArr.map((hog) =>{
      return ( <Hog
      hog = {hog}
      key = {hog.name}
      />)
    })
  }

  else {
    return hogs.map((hog) => {
    return (  <Hog
      hog = {hog}
      key={hog.name}
      /> )
    })
  }
  }

  handleClick = (evt) => {
    if (evt.target.name === "filterClicked") {
      let hogArr = hogs.filter((hog) => {
        return hog.greased === true
      })
  
      this.setState({
        hogList: hogArr
      })
    }
    this.setState({ [evt.target.name]: true })
  }

  compareName(a, b) {
    const hogA = a.name.toUpperCase();
    const hogB = b.name.toUpperCase();
  
    let comparison = 0;
    if (hogA > hogB) {
      comparison = 1;
    } else if (hogA < hogB) {
      comparison = -1;
    }
    return comparison;
  }

  compareWeight(a, b) {
    const hogA = a.weight
    const hogB = b.weight
  
    let comparison = 0;
    if (hogA > hogB) {
      comparison = 1;
    } else if (hogA < hogB) {
      comparison = -1;
    }
    return comparison;
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
