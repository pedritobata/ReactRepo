import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MeetupItem from './MeetupItem';
import FavoritesContext from '../../store/favorites-context';



describe('MeetupItem', () => {
    it('should render correctly', () => {
        const snap = renderer.create(<MeetupItem />).toJSON();
        expect(snap).toMatchSnapshot();
    })

    it('should call proper method when removing favorites', () => {
        const mockAddFavorite = jest.fn();
        const mockRemoveFavorite = jest.fn();
        const mockIsFavorite = jest.fn();
        mockIsFavorite.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false);
        const mockContext = {
            addFavorite: mockAddFavorite, 
            removeFavorite: mockRemoveFavorite,
            isFavorite: mockIsFavorite
        }
        const WrapperCtx = ({children}) => <FavoritesContext.Provider value={mockContext}>{children}</FavoritesContext.Provider>;
        const props = {
            id: 'fav1',
            title: 'first meetup',
            image: 'http://somepath/image.jpeg',
            address: 'Trinidad Moran',
            description: 'Que nadie venga a joder!!'
        }

        const {rerender} = render(<WrapperCtx><MeetupItem  {...props}/></WrapperCtx>);

        expect(mockIsFavorite).toHaveBeenCalledWith(props.id);
        expect(mockIsFavorite.mock.results[0].value).toBe(true);
        const buttonFav = screen.getByRole('button');
        expect(buttonFav).toHaveTextContent('Remove from favorites');
        userEvent.click(buttonFav);
        expect(mockRemoveFavorite).toHaveBeenCalled();
        rerender(<WrapperCtx><MeetupItem  {...props}/></WrapperCtx>);
        expect(mockIsFavorite.mock.results[2].value).toBe(false);
        expect(buttonFav).toHaveTextContent('To Favorites');

    })
})