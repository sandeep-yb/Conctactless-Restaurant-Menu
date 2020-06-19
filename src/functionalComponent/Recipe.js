import React from "react";

const Recipe = (props) => {
  console.log(props);
  const label = props.recipe.label;
  const image = props.recipe.image;
  return (
    <div>
      <h1>{label}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
