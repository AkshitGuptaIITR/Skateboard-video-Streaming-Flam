import React, { useEffect } from "react";
import style from "../Styles/header.module.css";
import searchIcon from "../assests/Images/searchIcon.png";
import { useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const selectionIndex = useSelector((state) => state.selectionIndex);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch({type: 'initialState'})
    history.push("/")
  }

  useEffect(() => {
    handleBack();
  }, []);

  return (
    <div className={style.header}>
      {selectionIndex === 0 ? (
        <>
          <h2>Content</h2>
          <img src={searchIcon} alt="" />
        </>
      ) : selectionIndex === 1 ? (
        <>
          <div>
            <FiArrowLeft className={style.icon} onClick={handleBack} />
            <h2>Browse</h2>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
