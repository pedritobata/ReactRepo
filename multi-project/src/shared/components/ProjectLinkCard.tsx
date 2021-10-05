import { NavLink } from "react-router-dom";
import { ProjectLink } from "../types/commonTypes";
import classes from "./ProjectLinkCard.module.css";

interface Props {
  projectLink: ProjectLink;
}

export default function ProjectLinkCard({ projectLink }: Props) {
  return (
    <NavLink
      to={projectLink.link}
      className={classes.link}
      style={{ backgroundImage: `url(${projectLink.imageUrl})` }}
    >
      <h3 className={classes.title}>{projectLink.title}</h3>
      <p className={classes.description}>{projectLink.description}</p>
    </NavLink>
  );
}
