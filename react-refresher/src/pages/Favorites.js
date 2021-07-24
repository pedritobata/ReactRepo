import React, {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';


const Favorites = () => {
const favoritesCtx = useContext(FavoritesContext);
    return (
        <section>
            <h1>Favorite meetups</h1>
            <MeetupList meetups={favoritesCtx.favoritesMeetups} />
        </section>
    )
}

export default Favorites;