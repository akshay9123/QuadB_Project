import React from "react";
import "./FifthContainerData.css";

const FifthContainerData = ({ image, title, bio }) => {
  return (
    <div className="card">
      <div className="card-data">
        <img src={image} alt="" className="card-icon"/>
        <h1 className="card-title">{title}</h1>
        <p className="card-bio">{bio}</p>
      </div>
    </div>
  );
};

export default FifthContainerData;
