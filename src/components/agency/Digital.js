import { useState, useEffect } from "react";

const Digital = ({ path }) => {
  const [scroll, setScroll] = useState(0);
  const scrollEvent = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className="digital">
      <div className="digital_img">
        <img
          src={path + "/images/splashBg.png"}
          alt="맥북배경"
          className="cat_bg"
          style={{ bottom: `-${scroll / 6}px` }}
        />
        <img
          src={path + "/images/cat.png"}
          alt="맥북"
          className="cat"
          style={{ top: `-${scroll / 6}px` }}
        />
      </div>
      <div className="digital_txt">
        <p>
          Leading digital agency with solid design and development experties. We
          focus on building Webflow websites.
        </p>
      </div>
    </div>
  );
};

export default Digital;
