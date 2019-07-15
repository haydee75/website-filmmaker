import React from "react";

const PhotoCard = props => {
  return <img src={props.image} alt={props.name} />;
};

export default PhotoCard;
