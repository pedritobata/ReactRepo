import React from "react";
import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../components/ui/Card";
import { createMeetup } from '../api/firebase/meetupsApi';

const AddMeetup = () => {
  const { replace } = useHistory();

  const onSubmitMeetup = (meetup) => {
    createMeetup(meetup).then((message) => {
      if(!message.toLowerCase().includes('Error')) {
        replace('/');
      }
    });
  }

  return (
    <section>
      <h2>Add new meetup</h2>
      <Card>
        <NewMeetupForm onSubmitMeetup={onSubmitMeetup}/>
      </Card>
    </section>
  );
};

export default AddMeetup;
