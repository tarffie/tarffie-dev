import { useState } from "react";
import type { Project } from "../utils/interfaces";

export const Card = ({ project }: { project: Project }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTechnologies = showAll
    ? project.technologies
    : project.technologies.slice(0, 2);

  const hasMore = project.technologies.length > 3;

  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <span className="project-description">
        {project.description}
      </span>

      <p className="tech-list-title">Technologies used:</p>
      <ul className="project-technologies">
        {visibleTechnologies.map((technology, index) => (
          <li key={index}>- {technology}</li>
        ))}

        {hasMore && (
          <li>
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "less" : "..."}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
