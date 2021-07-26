import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '.';

describe('<TextInput />', () => {
    it('should render a input with a onchange function', () => {
        const fn = jest.fn();
        render(<TextInput onChange={fn}/>);
        const input = screen.getByPlaceholderText('Faça uma busca..');
        userEvent.type(input, 'Test');
        expect(fn).toHaveBeenCalled();
    });
}); 