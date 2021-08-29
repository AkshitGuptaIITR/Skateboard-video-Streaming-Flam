import React, { useState } from "react";
import style from "../../Styles/story.module.css";
import tony from "../../assests/story-icon/tony-img.png";
import thomas from "../../assests/story-icon/thomas-img.png";
import budi from "../../assests/story-icon/budi-img.png";
import johny from "../../assests/story-icon/johny-img.png";
import andy from "../../assests/story-icon/andy-img.png";
import { IoCheckmarkSharp } from "react-icons/io5";

const Story = () => {
  const [id, setId] = useState("");
  const [selection, setSelection] = useState(true);

  const handleSelection = (index) => {
    if (index === id) {
      setSelection(!selection);
    } else if (id === "") {
      setSelection(true);
    } else {
      setSelection(true);
    }
    setId(index);
  };

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
            <div
              className={style.border}
              style={{
                background: `${
                  idx === id
                    ? `${
                        selection
                          ? `linear-gradient(#08A0F7, #6C5ECF)`
                          : `#1F1D2B`
                      }`
                    : null
                } `,
              }}
            >
              <div
                style={{
                  visibility: `${
                    idx === id ? `${selection ? "visible" : "hidden"}` : null
                  } `,
                }}
              >
                <IoCheckmarkSharp className={style.icon} />
              </div>
              <img
                src={data.image}
                // className={style.border}
                onClick={() => handleSelection(idx)}
                alt=""
              />
            </div>
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Story;
