import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Bollywood",
    "Live",
    "News",
    "Cooking",
    "Sports",
    "Movies",
    "Hollywood",
    "Rubix",
    "Cubastic_rahul",
  ];

  return (
    <div className="flex flex-wrap">
      {btnList.map((btnName) => {
        return ( 
            <Buttons name={btnName} key={btnName} /> 
        );
      })}
      {/* <Buttons name="All" />
      <Buttons name="Music" />
      <Buttons name="Mixes" />
      <Buttons name="Bollywood" />
      <Buttons name="Cooking" />
      <Buttons name="Live" />
      <Buttons name="News" />
      <Buttons name="Sports" />
      <Buttons name="Movies" />
      <Buttons name="Rubix" />
      <Buttons name="cubastic_rahul" /> 
      <Buttons name="Sports" />  */}
    </div>
  );
};

export default ButtonList;
