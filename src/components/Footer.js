import React from "react";
import footer from "../images/bg-footer-top-desktop.svg";
import icon from "../images/icon-messages.svg";
import icon1 from "../images/icon-phone.svg";
import icon2 from "../images/icon-email.svg";
import icon3 from '../images/icon-facebook.svg'
import icon4 from '../images/icon-twitter.svg'
import icon5 from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div>
      <img src={footer} alt="" width="100%" />
      <div className="footer text-light py-5 ">
        <div>
          <h1 className="fw-bolder">
            <img src={icon} alt="" /> Huddle
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Mauris nulla quam, hendrerit <br /> lacinia vestibulum a, ultrices
            quis sem.
          </p>

          <p>
            <img className="bg-dark" src={icon1} alt="" /> Phone:
            +1-543-123-4567
          </p>
 
          <p>
            <img className="bg-dark" src={icon2} alt="" /> example@huddle.com
          </p>

          <div className="icons">
          <img src={icon3} alt="" width='30px' />
          <img src={icon4} alt="" width='30px' />
          <img src={icon5} alt="" width='30px' />  
          </div>

         

        </div>

        <div>
          <h1>NEWSLETTER</h1>
          <p>
            To recieve tips on how to grow your community, <br /> sign up to our
            weekly newsletter. We'll never send <br /> you spam or pass on your
            email address
          </p>

          <div className="inp">
            <input className="px-4 py-3" type="text" name="" id="" />
            <button className="btn px-3  text-center">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
