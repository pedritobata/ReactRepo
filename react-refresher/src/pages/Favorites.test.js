import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Favorites from "./Favorites";
import FavoritesContext from "../store/favorites-context";

const meetupsDummy = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "http://images.com/image1.jpeg",
    address: "Meetupstreet 5, 12345 Lima City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "http://images.com/image2.jpeg",
    address: "Meetupstreet 5, 12345 Chiclayo City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

describe("Favorites Screen", () => {
  it("should render correctly", () => {
    const snapshot = renderer.create(<Favorites />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should render a list of favorite meetups', () => {
      const mockContext = {
        favoritesMeetups: meetupsDummy,
        favotitesTotal: meetupsDummy.length,
        addFavorite: () => {},
        removeFavorite: () => {},
        isFavorite: () => {},
      } 

      render(<FavoritesContext.Provider value={mockContext}><Favorites /></FavoritesContext.Provider>);
       
      const meetupsHeadings = screen.getAllByRole('heading');
      expect(meetupsHeadings[0]).toHaveTextContent('Favorite meetups');
      expect(meetupsHeadings[1]).toHaveTextContent(meetupsDummy[0].title);
      expect(meetupsHeadings[2]).toHaveTextContent(meetupsDummy[1].title);
  })
});
