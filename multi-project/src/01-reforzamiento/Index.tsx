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
            link: `${match.path}/${Routes.counter}`,
            imageUrl: 'https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        {
            title: 'Login & Collaborators',
            description: 'Sign in and get a list of collaborators. Filtering is available',
            link: `${match.path}/${Routes.loginAndCollaborators}`,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRWruvPK_1erGlSEe3d9OazALJsbquPM8ZQ&usqp=CAU'
        }
    ];
    return (
       <ProjectHome projectName="01 - Reforzamiento"  linkList={linkList} />
    )
}
