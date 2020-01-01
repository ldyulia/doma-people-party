import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Login from "./screen/Login";
import Main from "./screen/Main";

const firebaseConfig = {
  apiKey: "AIzaSyBvxubHFe2Noq5rsJJn0SQhC_4wS_ChBII",
  authDomain: "domas-people.firebaseapp.com",
  databaseURL: "https://domas-people.firebaseio.com",
  projectId: "domas-people",
  storageBucket: "domas-people.appspot.com",
  messagingSenderId: "26050434534",
  appId: "1:26050434534:web:5c9feda755855108b4b227"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  render() {
    const { user } = this.state;
    console.log(user);
    return <div className="App">{user ? <Main /> : <Login />}</div>;
  }
}

export default App;
