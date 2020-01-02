import React, { Component } from "react";
import "../css/sound.css";
import RequestMusic from "../components/requestMusic";
import MusicList from "../components/musicList";

class Sound extends Component {
  state = {
    user: this.props.user
  };
  render() {
    // console.log(this.state.user);
    return (
      <div>
        <div className="title">
          <h1>PLAY LIST</h1>
        </div>
        <div className="musicListWrap">
          <MusicList />
        </div>
        <RequestMusic user={this.state.user} />
      </div>
    );
  }
}

export default Sound;
