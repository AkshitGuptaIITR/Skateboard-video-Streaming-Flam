import React from "react";
import style from "../../Styles/watch.module.css";
import pic1 from "../../assests/Images/dummy-pic-1.png";
import pic2 from "../../assests/Images/dummy-pic-2.png";

const WatchList = () => {

  const list = [
    {
      title: "Prepare for your skateboard first jump",
      name: "Jordan Wise",
      views: 125905,
      time: "2 days ago",
      image: pic1,
    },
    {
      title: "Basic how to ride your skateboard comfortly",
      name: "Jordan Wise",
      views: 125905,
      time: "2 days ago",
      image: pic2,
    },
    {
      title: "Prepare for your skateboard first jump",
      name: "Jordan Wise",
      views: 125905,
      time: "2 days ago",
      image: pic1,
    },
    {
      title: "Basic how to ride your skateboard comfortly",
      name: "Jordan Wise",
      views: 125905,
      time: "2 days ago",
      image: pic2,
    },
  ];

  return (
    <>
      <div className={style.watchHeading}>Most Watched</div>
      <div className={`${style.box}`} style={{ flexDirection: `column` }}>
        {list.map((data, idx) => {
          return (
            <div key={idx} className={style.videoBox}>
              <img src={data.image} alt="" />
              <div>
                <h1>{data.title}</h1>
                <p>{data.name}</p>
                <p>{`${data.views} views  · ${data.time}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WatchList;
