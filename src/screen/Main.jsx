import React, { Component } from "react";
import "../css/main.css";
import Profile from "../assets/profile.jpg";

const infomation = [
  { title: "DATE", content: "2020년 1월 4일 토요일" },
  { title: "LOCATION", content: "이태원 어반호스트 그라운드 g4" },
  { title: "DRESS CODE", content: "어글리스웨터" },
  { title: "BRING", content: "쓸모없는 선물" },
  { title: "FEE", content: "4만원" },
  { title: "", content: "카카오뱅크 3333-05-6718660" }
];

class Main extends Component {
  state = {};
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
            // <div className="list" key={i}>
            //   <span className="title">{info.title}</span>
            //   <span className="content">{info.content}</span>
            // </div>
            <div className="list" key={i}>
              <h1 className="title">{info.title}</h1>
              <h1 className="content">{info.content}</h1>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Main;
