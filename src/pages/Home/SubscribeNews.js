import React from "react";

const SubscribeNews = () => {
  return (
    <section className="py-16 px-20">
      <div className="flex flex-col items-center gap-y-7 py-28 text-center bg-[#feead1] rounded-xl">
        <h1 className="font-fredoka text-heading text-4xl leading-normal">
          Get latest News and <br />
          Special offers!
        </h1>
        <p className="text-text">
          Join for the latest news, including special offers, events,
          collaborations, and new arrivals.
        </p>
        <div className="flex">
          <input
            className="bg-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="Email address"
          />
          <button className="custom-primary-btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNews;
