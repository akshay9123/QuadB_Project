import React from "react";
import slider from "../../assets/Slider.png";
import chair from "../../assets/chair.png";
import rightImg from "../../assets/rightImg.png";
import title from "../../assets/Title.png";
import lock from "../../assets/lock 01.png"
import delivery from '../../assets/fast delivery.png';
import money from '../../assets/money.png'
import call from '../../assets/call.png'
import "./UpperBody.css";
import Popular from "../Popular/Popular";
import FifthContainerData from "../fifthContainer/FifthContainerData";


const UpperBody = () => {
  return (
    <div className="parent">
      {/* here is the code of first container */}

      <div className="container-first">
        <div className="slider">
          <img src={slider} alt="" />
        </div>

        <div className="below-slider">
          <div className="left-box">
            <p>
              Simply Unique <span>/</span>
            </p>
            <p>
              Simply Better<span>.</span>
            </p>
          </div>
          <div className="right-box">
            <p>
              3legant{" "}
              <span>
                is a gift & decorations store based in HCMC,
                <br /> Vietnam. Est since 2019.
              </span>
            </p>
          </div>
        </div>

        <div className="container-second">
          <div className="left-div">
            <img src={chair} alt="" />
          </div>
          <div className="right-div">
            <img src={rightImg} alt="" />
          </div>
        </div>

        <div className="third-container">
          <img src={title} alt="" />
        </div>

        <div className="fourth-container">
          <Popular/>
        </div>

        <div className="fifth-container">
          <FifthContainerData image={delivery} title={"Free Shipping"} bio={"Order above $200"}/>

          <FifthContainerData image={money} title={"Money-Back"} bio={"30 days gurantee"}/>

          <FifthContainerData image={lock} title={"Secure Payment"} bio={"Secured by Stripe"}/>

          <FifthContainerData image={call} title={"24/7 Support"} bio={"Phone and Email support"}/>
          
        </div>
      </div>

      {/* here is the code of second container */}
    </div>
  );
};

export default UpperBody;
