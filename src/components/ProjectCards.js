import "../styles.css";
import { useState } from "react";

export default function ProjectCards(props) {
  const [isClicked, setMouseClick] = useState(false);

  const toggle = () => {
    setMouseClick(!isClicked);
  };

  return (
    <div
      className="card light zoom"
      style={{
        height: isClicked ? "auto" : "280px",
        overflow: isClicked ? "visible" : "hidden"
      }}
      onClick={toggle}
    >
      <div className="title">
        <img className="img" alt={props.alt} src={props.image} />
        <h2>{props.title}</h2>
      </div>
      <div className="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
