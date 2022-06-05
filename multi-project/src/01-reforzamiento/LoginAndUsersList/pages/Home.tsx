import { useEffect, useContext, useRef } from 'react';
import UserService from '../services/userService';
import { Context } from '../store/context';
import { fetchCollabsRequest, fetchCollabsSuccess, fetchCollabsFail } from '../store/collabsActions';

const Home = () => {
    const counterRef = useRef(0);
    console.log("Looping afuera...", counterRef.current);
    const {collabsState : {collabs, error, isLoading, page, collabsFiltered}, setCollabsState} = useContext(Context);
    const dispatcherRef = useRef(setCollabsState);
    useEffect(() => {
        console.log("Looping adentro...", counterRef.current);
        
        if(dispatcherRef.current === setCollabsState) {
        console.log("Looping adentro...", counterRef.current);
        counterRef.current = counterRef.current + 1 ;
       
        setCollabsState(fetchCollabsRequest());
        }
        /* if(counterRef.current < 10) {
            (async () => {
                setCollabsState(fetchCollabsRequest());
                const userService = new UserService();
                const response = await userService.fetchAllCollabs();
                if(response.errorMessage) {
                    setCollabsState(fetchCollabsFail(response.errorMessage))
                } else {
                    setCollabsState(fetchCollabsSuccess(response.data.collabs!, response.data.page!));
                }
            })();
        } */
        
        return () => {
            
            console.log("Desmontando Home..", counterRef.current)
        };
    }, []);

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
