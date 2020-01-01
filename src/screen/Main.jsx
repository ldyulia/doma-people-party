import React, { Component } from "react";
import firebase from "firebase";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="logout" onClick={() => firebase.auth().signOut()}>
          Log out
        </button>
      </div>
    );
  }
}

export default Main;
