import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '.';

describe('<TextInput />', () => {
  it('should render a input with a onchange function', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'testando'} />);
    const input = screen.getByPlaceholderText('Faça uma busca..');
    userEvent.type(input, 'Test');
    expect(fn).toHaveBeenCalledTimes(4);
  });

  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'testando'} />);

    const input = screen.getByPlaceholderText(/Faça uma busca../i);
    expect(input.value).toBe('testando');
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput onChange={fn} value={'testando'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
