import { useState } from "react";
import type { Project } from "../utils/interfaces";
import { Card } from "./Card";

const Projects = (props: { projects: Project[] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? props.projects
    : props.projects.slice(0, 2);

  const listProjects = visibleProjects.map(project => (
    <li className="project-item margin-top-5" key={project.title}>
      <Card project={project} />
    </li>
  ));

  return (
    <>
      <h2>Past Projects</h2>
      <ul>
        {listProjects}
      </ul>
      {props.projects.length > 2 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : "(...) Show more"}
        </button>
      )}
      <div className="margin-top-15" />
      <h3> Personal projects are at <a href="https://www.github.com/tarffie" target="_blank">Github</a> (for now) </h3>
    </>
  );
};

export default Projects;
