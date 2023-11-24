import React from "react";

const Footer = () => {
  const path = process.env.PUBLIC_URL;

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <address>
        ⓒMadeByProxymaDesign 2023. Web Design ltaly Company. P.lva 02130380385.
        All Rights Reserved. Privacy Policy
      </address>
      <div className="top_btn">
        <button id="top" onClick={scrollTop} type="button">
          <img src={path + "/images/topBtn.svg"} alt="탑버튼" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
