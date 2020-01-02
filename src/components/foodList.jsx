import React, { useState, useEffect } from "react";
import { Icon } from "antd";
import firebase from "firebase";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";

const imgList = [food1, food2, food3, food4, food5];

const FoodList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState(null);
  // console.log(randomImg);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    firebase
      .database()
      .ref("food")
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
        }
      });
  };

  return (
    <ul>
      {loading ? (
        <Icon type="loading" />
      ) : (
        list.map((item, i) => (
          <li key={i} className="list foodList">
            <img
              src={imgList[Math.floor(Math.random() * imgList.length)]}
              key={i}
            />

            {item.menu}
          </li>
        ))
      )}
    </ul>
  );
};

export default FoodList;
