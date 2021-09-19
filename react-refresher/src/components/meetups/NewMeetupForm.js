import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (event) => {
      event.preventDefault();
      const meetup = {
          title: titleRef.current.value,
          image: imageRef.current.value,
          address: addressRef.current.value,
          description: descriptionRef.current.value,
      }
      props.onSubmitMeetup(meetup);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Image</label>
        <input type="url" id="image" name="image" ref={imageRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" ref={addressRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          cols={5}
          required
          ref={descriptionRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
