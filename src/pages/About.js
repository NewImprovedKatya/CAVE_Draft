import "../styles.css";
import Navbar from "../components/Navbar.js";

export default function About() {
  return (
    <div className="page">
      <h1 className="heading">About CAVE</h1>
      <div className="section">
        <p>
          Hello there, and welcome to{" "}
          <span class="bold">
            Collaborative Artistic Ventures Entertainment
          </span>
          ! Here at CAVE, we are working to facilitate a growing{" ..."}
        </p>
      </div>
    </div>
  );
}
