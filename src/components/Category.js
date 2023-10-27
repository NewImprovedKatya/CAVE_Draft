import "../styles.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link to={props.link} className="card light zoom">
      <div>
        <h2>{props.title}</h2>
        <img className="img" alt={props.alt} src={props.illo} />
      </div>
    </Link>
  );
}
