import React from "react";
import { MdOutlineStar } from "react-icons/md";
import "./Item.css";

const Item = ({ image, title, price }) => {
  return (
    <div>
      <div className="item">
        <img src={image} alt="" />
      </div>
      <p className="rating">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </p>
      <p className="title">{title}</p>
      <div className="item-prices">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
