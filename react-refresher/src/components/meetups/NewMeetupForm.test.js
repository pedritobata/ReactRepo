import { expect, it } from '@jest/globals';
import { getDefaultNormalizer, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import NewMeetupForm from './NewMeetupForm';


describe('NewMeetupForm', () => {

    it('should render correctly', () => {
        const snap = renderer.create(<NewMeetupForm />).toJSON();
        expect(snap).toMatchSnapshot();
    })

    it('should render a title input field', () => {
        render(<NewMeetupForm />);
        screen.getByLabelText('Title');
    })

    it('should render an image field', () => {
        render(<NewMeetupForm />);
        screen.getByLabelText('Image');
    })

    it('should render an address field', () => {
        render(<NewMeetupForm />);
        screen.getByLabelText('Address', {exact: false})
    })

    it('should render a description textarea as the last field', () => {
        render(<NewMeetupForm />);
        screen.getByLabelText('Description', {
            exact: true,
            normalizer: (str) => getDefaultNormalizer({trim:  true})(str)
        });
        const fields = screen.getAllByRole('textbox');
        const descriptionField = fields[fields.length - 1];
        expect(descriptionField.name).toBe('description');
        expect(descriptionField.tagName).toMatch(/textarea/i);
    })

    it('should call parent onSubmitMeetup function when submitting', () => {
        const mockOnSubmitMeetup = jest.fn()
        render(<NewMeetupForm  onSubmitMeetup={mockOnSubmitMeetup} />);
        const meetup = {
            title: 'Perico los palotes',
            image: 'hhtp://la.imagen.jpg',
            address: 'Av Trinidad Moran',
            description: 'Esta es como la p...',
        }
        const title = screen.getByLabelText('Title');
        userEvent.type(title, meetup.title);
        const image = screen.getByLabelText('Image');
        userEvent.type(image, meetup.image);
        const address = screen.getByLabelText('Address');
        userEvent.type(address, meetup.address);
        const description = screen.getByLabelText('Description');
        userEvent.type(description, meetup.description);

        userEvent.click(screen.getByRole('button'));

        expect(mockOnSubmitMeetup).toHaveBeenCalledWith(meetup);
        
    })
})