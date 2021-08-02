import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';
describe('<Button />', () => {
  it('should render a button with a text "Carregar mais"', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais" onClick={fn} disabled={true} />);
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
    const fn = jest.fn();
    render(<Button text="Carregar mais" onClick={fn} disabled={true} />);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais" onClick={fn} disabled={false} />);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Carregar mais" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
