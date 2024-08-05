import React from "react";
import "./LowerBody.css";
import inputEmailImage from '../../assets/inputEmailImage.png'
import lowerBanner from "../../assets/Image Placeholder.png";
import SubscribeEmail from "../subscribeEmail/SubscribeEmail";
const LowerBody = () => {
  return (
    <div className="lowerBody">
      <div className="lowerBanner">
        <div className="lowerBannerLeft">
          <img src={lowerBanner} alt="" />
        </div>

        <div className="lowerBannerRight">
          <div className="info">
            <p className="offer">SALE UP TO 35% OFF</p>
            <p className="newStock">
              HUNDREDS of <br />
              New lower prices!
            </p>

            <p className="slogan">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </div>
        </div>
      </div>

      <SubscribeEmail/>
    </div>
  );
};

export default LowerBody;
