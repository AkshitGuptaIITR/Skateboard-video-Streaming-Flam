import React from 'react'
import style from "../../Styles/story.module.css";
import tony from "../../assests/story-icon/tony-img.png"
import thomas from "../../assests/story-icon/thomas-img.png";
import budi from "../../assests/story-icon/budi-img.png";
import johny from "../../assests/story-icon/johny-img.png";
import andy from "../../assests/story-icon/andy-img.png";

const Story = () => {
  const storyDetails = [
    {
      name: "Tony",
      image: tony,
    },
    {
      name: "Thomas",
      image: thomas,
    },
    {
      name: "Budi",
      image: budi,
    },
    {
      name: "Johny",
      image: johny,
    },
    {
      name: "Andy",
      image: andy,
    },
  ];
  return (
    <div className={style.story}>
      {storyDetails.map((data, idx) => {
        return (
          <div className={style.storyBox} key={idx}>
            <img src={data.image} alt="" />
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Story
