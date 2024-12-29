import React from "react";
import TagButton from "./TagButton";
const list = [
  "All",
  "Song",
  "Gaming",
  "Live",
  "Soccer",
  "News",
  "Cricket",
  "Valentine",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex gap-2 m-1">
      {list.map((item, index) => (
        <TagButton key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
