import React from "react";
import Swiper from "./Swiper";
import Digital from "./Digital";

const Main = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <main>
      <div className="main_title">
        <h2>
          We are
          <br /> Creative
          <br /> Agency
        </h2>
        <h3>Working with brands all over the world</h3>
      </div>
      <Digital path={path} />
      <Swiper path={path} />
    </main>
  );
};

export default Main;
