import "../styles.css";
import { useState } from "react";

export default function EventCard(props) {
  const [isClicked, setMouseClick] = useState(false);

  const toggle = () => {
    setMouseClick(!isClicked);
  };

  return (
    <div
      className="event light zoom"
      style={{
        height: isClicked ? "auto" : "65px",
        overflow: isClicked ? "visible" : "hidden"
      }}
      onClick={toggle}
    >
      <img className="icon" alt={props.alt} src={props.image} />
      <div className="eventTitle">
        <h3 className="noMargin">{props.title}</h3>

        <p className="noMargin">{props.date}</p>
      </div>

      <div className="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
