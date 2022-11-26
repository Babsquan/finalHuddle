import React from "react";
import image from '../images/bg-section-top-desktop-2.svg'
import images1 from '../images/illustration-your-users.svg'
import images2 from '../images/bg-section-bottom-desktop-2.svg'

const User = () => {
  return (
    <div className="">
      <div className="userpy-5">
        <img src={image} alt="" width="100%" />
        <div className="user">
          <div className="px-5 text-left py-5">
            <h1 className="fw-bolder text-dark">Your Users</h1>
            <p className="Ufw-bold text-secondary ">
              It takes no time at all to integrate Huddle with your app's <br />
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div className="div-img1 ">
            <img className="img1" src={images1} alt="" width="70%" />
          </div>
        </div>
        <img
          src={
            images2
          }
          alt=""
          width="100%"
        />
      </div>
      <div className="text-center my-5 py-5">
        <h1 className="text-dark fw-bolder my-5">Ready To Build Your Community?</h1>
        <button className="button py-3 px-5 mb-5">Get Started For Free</button>
      </div>
    </div>
  );
};

export default User;
