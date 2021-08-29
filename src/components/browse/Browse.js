import React from "react";
import pic from "../../assests/Images/feed image.png";
import style from "../../Styles/browse.module.css";
import { AiFillHeart } from "react-icons/ai";
import { HiPaperAirplane } from "react-icons/hi";

const Browse = () => {
  const feed = [
    {
      title: "Your first skateboard",
      image: pic,
    },
    {
      title: "Your first skateboard",
      image: pic,
    },
  ];

  return (
    <>
      <div className={style.structure}>
        {feed.map((data, idx) => {
          return (
            <div key={idx} className={style.container}>
              <img src={data.image} alt="" />
              <div>
                <h1>{data.title}</h1>
                <div>
                  <AiFillHeart className={style.icon} />
                </div>
                <p>
                  <HiPaperAirplane className={style.icon} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Browse;
