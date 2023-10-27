import "../styles.css";
import stepList from "./stepList";
import Step from "./Step.js";
import JoinButton from "./JoinButton.js";

export default function Header() {
  return (
    <div className="section">
      <div className=" section">
        <div className="intro">
          <h1>Colaborative Artistic Ventures Entertainment</h1>
          <h2>
            A community of artists working together to make art and tell
            stories.
          </h2>
          <JoinButton />
        </div>
        <div className="section">
          {stepList.map((stepItem) => (
            <Step
              key={stepItem.key}
              step={stepItem.step}
              illo={stepItem.illo}
            />
          ))}
          <p>*CAVE does not guarantee every project will make money</p>
        </div>
        <JoinButton />
      </div>
    </div>
  );
}
