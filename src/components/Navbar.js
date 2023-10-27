import React, { useState, useEffect } from "react";
import "../styles.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="navbar" style={{ top: visible ? "0" : "-60px" }}>
      <p className="logo">CAVE LOGO</p>
      <ul>
        <li>Projects</li>
        <li>Events</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
