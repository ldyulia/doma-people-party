import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { Icon } from "antd";
import "antd/dist/antd.css";
import "../css/components.css";

const Navigation = ({ user }) => {
  const [subMenu, setSubMenu] = useState(false);
  const showSubMenu = () => {
    subMenu ? setSubMenu(false) : setSubMenu(true);
  };

  const handleSubMenu = e => {
    e.stopPropagation();
    // setTimeout(() => {
    //   setSubMenu(false);
    // }, 200);
    setSubMenu(false);
  };

  return (
    <div className="navWrap">
      <ul className="nav">
        <li className="name">
          <Link to="/">{user.displayName}</Link>
        </li>
        <li onClick={showSubMenu}>
          CONTENTS <Icon type="down-square" />
          {subMenu ? (
            <ul className="subMenu">
              <li onClick={e => handleSubMenu(e)}>
                <Link to="/">NOTICE</Link>
              </li>
              <li onClick={e => handleSubMenu(e)}>
                <Link to="/food">FOOD</Link>
              </li>
              <li onClick={e => handleSubMenu(e)}>
                <Link to="/music">MUSIC</Link>
              </li>
              {/* <li onClick={e => handleSubMenu(e)}>
                <Link to="/more">MORE</Link>
              </li> */}
              <li onClick={() => firebase.auth().signOut()}>SIGN OUT</li>
            </ul>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
