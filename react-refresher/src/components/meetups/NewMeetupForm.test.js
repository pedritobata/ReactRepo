import { expect, it } from '@jest/globals';
import { getDefaultNormalizer, render, screen } from '@testing-library/react';
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
})