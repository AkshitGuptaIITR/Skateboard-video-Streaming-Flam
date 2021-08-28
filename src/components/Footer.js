import React from "react";
import style from "../Styles/footer.module.css";
import { RiBookmark2Fill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";

const Footer = () => {
  const options = [
    {
      name: "Home",
      icon: <IoMdHome className={style.icon} />,
    },
    {
      name: "Browse",
      icon: <IoVideocam className={style.icon} />,
    },
    {
      name: "Bookmark",
      icon: <RiBookmark2Fill className={style.icon} />,
    },
    {
      name: "More",
      icon: <RiApps2Fill className={style.icon} />,
    },
  ];

  return (
    <div className={style.footer}>
      {options.map((data, idx) => {
        return (
          <div className={style.box}>
            {data.icon}
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
