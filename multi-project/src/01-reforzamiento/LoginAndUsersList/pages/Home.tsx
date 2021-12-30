import { useEffect, useContext } from 'react';
import UserService from '../services/userService';
import { Context } from '../store/context';
import { fetchCollabsRequest, fetchCollabsSuccess, fetchCollabsFail } from '../store/collabsActions';

const Home = () => {
    const {collabsState : {collabs, error, isLoading, page, collabsFiltered}, setCollabsState} = useContext(Context);
    useEffect(() => {
        (async () => {
            if(collabs?.length !== 0) return;
            //setCollabsState(fetchCollabsRequest());
            const userService = new UserService();
            const response = await userService.fetchAllCollabs();
            if(response.errorMessage) {
                setCollabsState(fetchCollabsFail(response.errorMessage))
            } else {
                setCollabsState(fetchCollabsSuccess(response.data.collabs!, response.data.page!));
            }
        })();
    }, [setCollabsState, collabs]);

    if(isLoading) {
        return <p>Loading..</p>
    }

    return (
        <main>
           <h1>Collaborators</h1> 
           <ul>
           {collabs.map(collab => <li>{collab.name}</li>)}
           </ul>
          
        </main>
    )
}

export default Home;
