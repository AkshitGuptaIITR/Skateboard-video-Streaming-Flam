import React from "react";
import pic from "../../assests/Images/feed image.png";
import style from "../../Styles/browse.module.css";
import { AiFillHeart } from "react-icons/ai";
import { HiPaperAirplane } from "react-icons/hi";
import { useState } from "react";

const Browse = () => {
  const [id, setId] = useState("");
  const [like, setLike] = useState(true);

  const handleLike = (index) => {
    if (index === id) {
      setLike(!like);
    } else if (id === "") {
      setLike(true);
    } else {
      setLike(true);
    }
    setId(index);
  };

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
                <div
                  onClick={() => handleLike(idx)}
                  style={{
                    background: `${
                      idx === id ? (like ? "#EA5F5F" : "#D8D8D8") : null
                    }`,
                  }}
                >
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
