import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_DATA } from '../data';

const AllMeetups = () => {

    return (
        <section>
            <h2>All Meetups</h2>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}

export default AllMeetups;