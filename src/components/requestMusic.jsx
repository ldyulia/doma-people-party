import React, { useState } from "react";
import { dataSubmit } from "../assets/utils";
import { Icon } from "antd";

const RequestMusic = ({ user }) => {
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [singer, setSinger] = useState(null);
  const [title, setTitle] = useState(null);
  // console.log(singer, title);

  const submitWithTimestamp = () => {
    setLoading(true);
    if (singer === null || title === null) {
      alert("Please fill the form!");
      setLoading(false);
    } else {
      const timestamp = new Date().getTime();
      const songData = {
        [timestamp]: { singer, title, timestamp, by: user.displayName }
      };

      dataSubmit(user.uid, "music", songData);
    }
  };

  return (
    <div className="requestMusic">
      <input
        type="text"
        className="singer"
        placeholder="musician"
        onChange={e => setSinger(e.target.value)}
      />
      <input
        type="text"
        className="song"
        placeholder="title"
        onChange={e => setTitle(e.target.value)}
      />
      <button className="submit" onClick={submitWithTimestamp}>
        {loading ? <Icon type="loading" /> : "add play list"}
      </button>
    </div>
  );
};

export default RequestMusic;
