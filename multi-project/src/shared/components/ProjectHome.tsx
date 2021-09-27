import { Link } from 'react-router-dom';
import { ProjectLink } from "../types/commonTypes";
import ProjectLinkCard from "./ProjectLinkCard";
import classes from './ProjectHome.module.css';

interface Props {
  projectName: string;
  linkList: ProjectLink[];
}

export default function ProjectHome(props: Props) {
  return (
    <section className={classes.projectHome}>
      <h2 className={classes.title}>{props.projectName}</h2>
      <ul className={classes.list}>
        {props.linkList.map((link) => (
          <ProjectLinkCard projectLink={link} key={link.title}/>
        ))}
      </ul>
      <Link className={classes.backlink} to="/">&lt; &lt; Go to main menu</Link>
    </section>
  );
}
