import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../components/ui/Card";

const AddMeetup = () => {
  return (
    <section>
      <h2>Add new meetup</h2>
      <Card>
        <NewMeetupForm />
      </Card>
    </section>
  );
};

export default AddMeetup;
