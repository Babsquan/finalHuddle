import React from "react";
import image from '../images/illustration-flowing-conversation.svg'

const Flow = () => {
  return (
    <div className="">
      <div className=" flow  my-5 ">
        <img
          src={image}
          alt=""
          width="55%"
        />

        <div className="text-right my-5 py-5">
          <div className="ff">
            <h1 className="text-dark fw-bolder mt-5 ">Flowing Conversations</h1>
            <div className="">
              <p className="fw-5 text-dark my-4 fw-bold   ">
                You wouldn't paginate a conversation in real life, so why do it
                online? <br />
                Our threads have just-in-time loading for a more natural 
                flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
