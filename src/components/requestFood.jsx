import React, { useState } from "react";
// import { dataSubmit } from "../assets/utils";
import firebase from "firebase";
import { Icon } from "antd";

const RequestFood = ({ user }) => {
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("");
  // console.log(singer, menu);

  const submitWithTimestamp = () => {
    setLoading(true);
    if (menu === null) {
      alert("Please fill the form!");
      setLoading(false);
    } else {
      const timestamp = new Date().getTime();
      const foodData = {
        [timestamp]: { menu, timestamp, by: user.displayName }
      };

      dataSubmit(user.uid, foodData);
    }
  };
  const dataSubmit = (uid, data) => {
    firebase
      .database()
      .ref(`Users/${uid}/food`)
      .update(data, function(error) {
        if (error) {
          alert(error);
          window.location.reload();
        } else {
          console.log("save to user data success");

          firebase
            .database()
            .ref("food")
            .update(data, function(error) {
              if (error) {
                alert(error);
                window.location.reload();
              } else {
                console.log("save to list data success");
                alert("Request Success");
                // window.location.reload();
                setMenu("");
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
        className="song"
        placeholder="What do you want to eat?"
        onChange={e => setMenu(e.target.value)}
        value={menu}
      />
      <button
        className="submit"
        onClick={submitWithTimestamp}
        disabled={loading ? true : false}
      >
        {loading ? <Icon type="loading" /> : "add menu"}
      </button>
    </div>
  );
};

export default RequestFood;
