import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              <li onClick={e => handleSubMenu(e)}>
                <Link to="/more">MORE</Link>
              </li>
            </ul>
          ) : null}
        </li>
      </ul>
    </div>
    // <div className="navWrap">
    //   <Menu
    //     className="nav"
    //     onClick={handleNavClick}
    //     selectedKeys={active}
    //     mode="horizontal"
    //   >
    //     <Menu.Item key="main">
    //       <Link to="/">
    //         <Icon type="user" />
    //         {user.displayName}
    //       </Link>
    //     </Menu.Item>

    //     <SubMenu
    //       title={
    //         <span className="submenu-title-wrapper">
    //           <Icon type="shopping-cart" />
    //           Contents
    //         </span>
    //       }
    //     >
    //       <Menu.Item key="food">
    //         <Link to="/foods">
    //           <Icon type="dashboard" />
    //           FOODS
    //         </Link>
    //       </Menu.Item>
    //       <Menu.Item key="sound">
    //         <Link to="/sound">
    //           <Icon type="dashboard" />
    //           SOUND TRACKS
    //         </Link>
    //       </Menu.Item>
    //       <Menu.Item key="games">
    //         <Link to="/games">
    //           <Icon type="dashboard" />
    //           ICE BREAKING
    //         </Link>
    //       </Menu.Item>
    //     </SubMenu>
    //     <Menu.Item key="logOut" className="logOut">
    //       <Button onClick={() => firebase.auth().signOut()}>Log out</Button>
    //     </Menu.Item>
    //   </Menu>
    // </div>
  );
};

export default Navigation;
