import React, { useState, useEffect } from "react";
import { Icon } from "antd";
import firebase from "firebase";
import play from "../assets/play.png";

const MusicList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState(null);
  // console.log(list);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    firebase
      .database()
      .ref("music")
      .on("value", snapshot => {
        // console.log(snapshot.val());
        if (snapshot.val()) {
          const originData = snapshot.val();
          let listArr = [];
          for (let key in originData) {
            listArr.push(originData[key]);
          }
          // console.log(listArr);
          listArr = listArr.sort((a, b) => b.timestamp - a.timestamp);

          setList(listArr);
          setLoading(false);
        }
      });
  };

  return (
    <ul>
      {loading ? (
        <Icon type="loading" />
      ) : (
        list.map((item, i) => (
          <li key={i} className="list musicList">
            {/* <Icon type="play-square" theme="filled" /> */}
            <img src={play} alt="" className="src" />
            {item.singer} - {item.title}
          </li>
        ))
      )}
    </ul>
  );
};

export default MusicList;
