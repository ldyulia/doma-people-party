import React, { useState, useEffect } from "react";
import { Icon } from "antd";
import firebase from "firebase";

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
      .once("value", snapshot => {
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
          console.log(list);
        }
      });
  };

  return (
    <ul>
      {loading ? (
        <Icon type="loading" />
      ) : (
        list.map((item, i) => (
          <li key={i} className="list">
            <Icon type="play-square" theme="filled" />
            {item.singer} - {item.title}
          </li>
        ))
      )}
    </ul>
  );
};

export default MusicList;
