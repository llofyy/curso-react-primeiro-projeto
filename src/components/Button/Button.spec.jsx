import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Button from '.';
describe('<Button />', () => {
    it('should render a button with a text "Carregar mais"', () => {
        render(<Button text="Carregar mais" />);
        expect.assertions(1);
        const button = screen.getByRole('button', { name: /carregar mais/i });
        expect(button).toBeInTheDocument();
    });

    it('should render a button with a onclick function', () => {
        const fn = jest.fn();
        expect.assertions(1);
        render(<Button text="Carregar mais" onClick={fn} />);
        const button = screen.getByRole('button', { name: /carregar mais/i });
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Carregar mais" disabled={true} />);
        const button = screen.getByRole('button', { name: /carregar mais/i });
        expect(button).toBeDisabled();
    });

    it('should be enabled when disabled is false', () => {
        render(<Button text="Carregar mais" disabled={false} />);
        const button = screen.getByRole('button', { name: /carregar mais/i });
        expect(button).toBeEnabled();
    });
});