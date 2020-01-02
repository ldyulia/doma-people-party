import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import firebase from "firebase";
import Login from "./screen/Login";
import Main from "./screen/Main";
import Navigation from "./components/navigation";
import Food from "./screen/food";
import Sound from "./screen/Sound";
import More from "./screen/more";

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
    document.body.classList.add("customBody");
  }
  render() {
    const { user } = this.state;
    // console.log(user);
    return (
      <div className="App">
        {user ? (
          <>
            <Navigation user={user} />
            <div className="content">
              <Switch>
                <Route
                  path="/"
                  exact={true}
                  render={props => <Main user={user} {...props} />}
                />
                <Route
                  path="/food"
                  exact={true}
                  render={props => <Food user={user} {...props} />}
                />
                <Route
                  path="/music"
                  exact={true}
                  render={props => <Sound user={user} {...props} />}
                />
                <Route
                  path="/more"
                  exact={true}
                  render={props => <More user={user} {...props} />}
                />
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
