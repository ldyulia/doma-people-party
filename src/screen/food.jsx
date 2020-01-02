import React, { Component } from "react";
import "../css/sound.css";
import FoodList from "../components/foodList";
import RequestFood from "../components/requestFood";

class Food extends Component {
  state = {
    user: this.props.user
  };
  render() {
    // console.log(this.state.user);
    return (
      <div>
        <div className="title">
          <h1>MENU</h1>
        </div>
        <div className="musicListWrap">
          <FoodList />
        </div>
        <RequestFood user={this.state.user} />
      </div>
    );
  }
}

export default Food;
