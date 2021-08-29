import React from "react";
import style from "../Styles/footer.module.css";
import { RiBookmark2Fill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const selectionIndex = useSelector(state => state.selectionIndex);
  const dispatch = useDispatch();
  const history = useHistory();

  let fillClass = [{
    colour: null
  },
  {
    colour: null
  },
  {
    colour: null,
  },
  {
    colour: null
  }];

  const handleSelection = (index) => {
    if (index === 0) {
      history.push('/')
    }
    else if (index === 1) {
      history.push('/browse')
    }
    else {
      history.push('/error')
    }
    dispatch({ type: 'selectionChange', index: index })
  }


  fillClass[selectionIndex].colour = style.fillActive

  const options = [
    {
      name: "Home",
      icon: <IoMdHome className={`${style.icon} ${fillClass[0].colour}`} />,
    },
    {
      name: "Browse",
      icon: <IoVideocam className={`${style.icon} ${fillClass[1].colour}`} />,
    },
    {
      name: "Bookmark",
      icon: <RiBookmark2Fill className={`${style.icon} ${fillClass[2].colour}`} />,
    },
    {
      name: "More",
      icon: <RiApps2Fill className={`${style.icon} ${fillClass[3].colour}`} />,
    },
  ];

  return (
    <div className={style.footer}>
      {options.map((data, idx) => {
        return (
          <div key={idx} onClick={() => handleSelection(idx)} className={style.box}>
            {data.icon}
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
