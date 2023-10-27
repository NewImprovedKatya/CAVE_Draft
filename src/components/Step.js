import "../styles.css";

export default function Step(props) {
  return (
    <div className="card steps">
      <img className="img" src={props.illo} alt={props.alt} />
      <h3 className="blend">{props.step}</h3>
    </div>
  );
}
