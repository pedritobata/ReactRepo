import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favoritesMeetups: [],
  favotitesTotal: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setFavorites((prev) => favorites.concat(meetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prev) =>
      favorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const isFavoriteHandler = (meetupId) => {
    return favorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favoritesMeetups: favorites,
    favotitesTotal: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
