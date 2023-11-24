import { useState } from "react";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header>
      <a href="#" className="logo">
        <h1>
          <img src={path + "/images/pngegg.png"} alt="고양이젤리" />
        </h1>
      </a>
      <a
        className={isOpen ? "toggle_on" : "toggle_btn"}
        onClick={() => toggleMenu()}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </a>
      <menu className={isOpen ? "show_menu" : "hide_menu"}>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </menu>
    </header>
  );
};

export default Header;
