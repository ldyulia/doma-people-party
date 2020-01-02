import React, { Component } from "react";
import "../css/main.css";
import firebase from "firebase";
import Profile from "../assets/profile.jpg";

const infomation = [
  { title: "DATE", content: "2020년 1월 4일 토요일 저녁 6시" },
  {
    title: "LOCATION",
    content: "이태원 어반호스트 그라운드 g4 (click!)",
    link:
      "https://v4.map.naver.com/?query=7J207YOc7JuQIOyWtOuwmO2YuOyKpO2KuCDqt7jrnbzsmrTrk5w%3D&searchCoord=&tab=1&lng=f8109c648a0803b750246f988306863c&type=SITE_1&mapMode=0&mpx=31f5420e2eb37cff2e894c31ef01265eb74dab1c44327efa4e9693ca531b853dcd0abed51dbe0e38df146e574c72d990&lat=b840d4c3c8e69ccaf3d03943931fd261&dlevel=12&enc=b64&menu=location&__fromRestorer=true"
  },
  { title: "DRESS CODE", content: "어글리스웨터" },
  { title: "BRING", content: "쓸모없는 선물" },
  { title: "FEE", content: "4만원" },
  { title: "", content: "카카오뱅크 3333-05-6718660" }
];

class Main extends Component {
  state = { user: this.props.user };

  componentDidMount() {
    const { user } = this.state;
    const uid = user.uid;

    firebase
      .database()
      .ref(`Users/${uid}`)
      .once("value", snapshot => {
        // console.log(snapshot.val().name);
        if (snapshot.val()) {
          if (snapshot.val().name === undefined) {
            firebase
              .database()
              .ref(`Users/${uid}`)
              .update({ name: user.displayName });
          }
        } else {
          firebase
            .database()
            .ref(`Users/${uid}`)
            .update({ name: user.displayName });
        }
      });
  }
  goToMap = link => {
    window.open(link, "_blank");
  };
  render() {
    return (
      <>
        <div className="invitation">
          <div className="profile">
            <img src={Profile} alt="" />
          </div>
          <h4>@dougnmaster_</h4>
        </div>
        <div className="section info">
          {infomation.map((info, i) => (
            <div
              className="list"
              key={i}
              onClick={info.link ? () => this.goToMap(info.link) : undefined}
            >
              <h1 className="title">{info.title}</h1>
              <h1 className="content">{info.content}</h1>
            </div>
          ))}
        </div>
        <div className="footer">
          <span>Copyright(c) @doughmaster_ version 1.0.1</span>
        </div>
      </>
    );
  }
}

export default Main;
