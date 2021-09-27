import { useRouteMatch } from 'react-router-dom';
import ProjectHome from "../shared/components/ProjectHome";
import { ProjectLink } from '../shared/types/commonTypes';
import { Routes } from './Router01';



export default function Index() {
    const match = useRouteMatch();
    const linkList: ProjectLink[] = [
        {
            title: 'Counter 1',
            description: 'Simple counter. Exploring render optimization',
            link: `${match.path}/${Routes.counter}`
        },
        {
            title: 'XXXXXX',
            description: 'Dummy Card link. Replace this with a real one!!',
            link: `????`
        }
    ];
    return (
       <ProjectHome projectName="01 - Reforzamiento"  linkList={linkList} />
    )
}
