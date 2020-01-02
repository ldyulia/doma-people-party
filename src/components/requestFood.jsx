import React, { useState } from "react";
import { dataSubmit } from "../assets/utils";
import { Icon } from "antd";

const RequestFood = ({ user }) => {
  // console.log(user);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(null);
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

      dataSubmit(user.uid, "food", foodData);
    }
  };

  return (
    <div className="requestMusic">
      <input
        type="text"
        className="song"
        placeholder="What do you want to eat?"
        onChange={e => setMenu(e.target.value)}
      />
      <button className="submit" onClick={submitWithTimestamp}>
        {loading ? <Icon type="loading" /> : "add menu"}
      </button>
    </div>
  );
};

export default RequestFood;
