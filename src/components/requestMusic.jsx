import React, { useState } from "react";
// import { dataSubmit } from "../assets/utils";
import firebase from "firebase";
import { Icon } from "antd";

const RequestMusic = ({ user }) => {
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [singer, setSinger] = useState("");
  const [title, setTitle] = useState("");
  // console.log(singer, title);

  const submitWithTimestamp = () => {
    setLoading(true);
    if (singer === "" || title === "") {
      alert("Please fill the form!");
      setLoading(false);
    } else {
      const timestamp = new Date().getTime();
      const songData = {
        [timestamp]: { singer, title, timestamp, by: user.displayName }
      };
      dataSubmit(user.uid, songData);
    }
  };
  const dataSubmit = (uid, data) => {
    firebase
      .database()
      .ref(`Users/${uid}/music`)
      .update(data, function(error) {
        if (error) {
          alert(error);
          window.location.reload();
        } else {
          console.log("save to user data success");

          firebase
            .database()
            .ref("music")
            .update(data, function(error) {
              if (error) {
                alert(error);
                window.location.reload();
              } else {
                console.log("save to list data success");
                alert("Request Success");
                // window.location.reload();
                setSinger("");
                setTitle("");
                setLoading(false);
              }
            });
        }
      });
  };

  return (
    <div className="requestMusic">
      <input
        type="text"
        className="singer"
        placeholder="musician"
        onChange={e => setSinger(e.target.value)}
        value={singer}
      />
      <input
        type="text"
        className="song"
        placeholder="title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <button
        className="submit"
        onClick={submitWithTimestamp}
        disabled={loading ? true : false}
      >
        {loading ? <Icon type="loading" /> : "add play list"}
      </button>
    </div>
  );
};

export default RequestMusic;
