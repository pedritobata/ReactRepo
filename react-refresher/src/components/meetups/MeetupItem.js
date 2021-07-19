import React, {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MeetupItem.module.css';


const MeetupItem = (props) => {
    const {addFavorite, removeFavorite, isFavorite} = useContext(FavoritesContext);

    const toggleFavoritesHandler = () => {
        if(isFavorite(props.id)){
            removeFavorite(props.id);
        } else {
            addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }

    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}> 
                <button onClick={toggleFavoritesHandler}>{isFavorite(props.id) ? 'Remove from favorites' : 'To Favorites 💖'}</button>
            </div>
        </li>
    )
}

export default MeetupItem;