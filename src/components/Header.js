import React from "react";
import style from "../Styles/header.module.css";
import searchIcon from "../assests/Images/searchIcon.png";

const Header = () => {
  return (
    <div className={style.header}>
      <h2>Content</h2>
      <img src={searchIcon} alt="" />
    </div>
  );
};

export default Header;
