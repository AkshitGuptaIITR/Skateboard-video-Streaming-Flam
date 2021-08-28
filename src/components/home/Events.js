import React from "react";
import style from "../../Styles/events.module.css";
import jump from "../../assests/Images/skateboard-jump.png";

const Events = () => {
  const event = [
    {
      title: "Prepare for your first skateboard jump",
      name: "Thomas Hope",
      time: "2 weeks",
      image: jump,
    },
    {
      title: "Prepare for your first skateboard jump",
      name: "Thomas Hope",
      time: "2 weeks",
      image: jump,
    },
  ];

  return (
    <div className={style.events}>
      {event.map((data, idx) => {
        return (
          <div
            className={style.rectangle}
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <span>
              <h1>{data.title}</h1>
              <h2>{data.name}</h2>
              <p>{data.time}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
