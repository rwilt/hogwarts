import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br/>    <br/>
      <button name="filterClicked" onClick={props.handleClick}>Filter Greasy Hogs</button>
      <button name="sortByName" onClick={props.handleClick}>Sort By Name</button>
      <button name="sortByWeight" onClick={props.handleClick}>Sort By Weight</button>
    </div>
  );
};

export default Nav;
