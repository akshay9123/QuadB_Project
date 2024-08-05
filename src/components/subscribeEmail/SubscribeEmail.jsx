import React from "react";
import "./SubscribeEmail.css";

const SubscribeEmail = () => {
  return (
    <div className="inputEmail">
      <div className="inputBox">

        <div className="inputBox1">
          <p className="toJoin">Join Our Newsletter</p>
          <p className="toSign">
            Sign up for deals, new products and promotions
          </p>
        </div>


        <div className="inputBox2">
          <input type="email" placeholder="Email Address" />
          <button>Sign Up</button>
        </div>


      </div>
    </div>
  );
};

export default SubscribeEmail;
