import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "../css/login.css";

const uiConfig = {
  signInFlow: "popup",
  signInoptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccess: () => false
  }
};

const Login = () => {
  return (
    <div className="loginContainer">
      <div>
        <div className="titleWrap">
          <div className="title1">
            <h1>2 0 1 9</h1>
          </div>
          <div className="title2">
            <h1>DOMA's</h1>
          </div>
          <div className="title3">
            <h1>people</h1>
          </div>
        </div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};

export default Login;
