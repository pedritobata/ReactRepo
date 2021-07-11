import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {

    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    )
}

export default NewMeetupForm;