import ProjectCards from "../components/ProjectCards.js";
import projectList from "../components/projectList";

export default function Projects() {
  return (
    <div className="page">
      <h1 className="heading">Official CAVE Projects</h1>
      <div className="section">
        {projectList.map((projectItem) => (
          <ProjectCards
            className="thing"
            key={projectItem.key}
            image={projectItem.image}
            title={projectItem.title}
            content={projectItem.content}
          />
        ))}
      </div>
    </div>
  );
}
