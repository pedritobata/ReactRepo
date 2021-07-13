import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { getAllMeetups } from '../api/firebase/meetupsApi';

const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        getAllMeetups().then(({message, meetups}) => {
            if(!message.toLowerCase().includes('error')){
                setMeetups(meetups);
                setIsLoading(false);
            }
        })
    }, []);


    if(isLoading){
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <section>
            <h2>All Meetups</h2>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default AllMeetups;