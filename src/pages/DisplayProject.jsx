import React from "react";
import { useParams } from "react-router-dom";
import { ListProject } from "../provider/ListProject";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from '@material-ui/icons/Link';
import "../styles/DisplayProject.css";

function DisplayProject() {
  const { id } = useParams();
  const project = ListProject[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
     
      <div className="icon">
      <GitHubIcon onClick={() => window.open('https://github.com/ManishaMandal123', '_blank')}/>
      <LinkIcon onClick={() => window.open(project.deployedLink, '_blank')} />
      </div>
    </div>
  );
}

export default DisplayProject;