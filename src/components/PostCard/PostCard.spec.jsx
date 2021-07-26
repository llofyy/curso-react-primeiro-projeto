import { render, screen } from '@testing-library/react';
import PostCard from '.';
import { PostCardProps } from '../../mock';

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard { ...PostCardProps } />);

        expect(screen.getByRole('img', { name: PostCardProps.title})).toHaveAttribute('src', PostCardProps.cover);
        expect(screen.getByRole('heading', { name: PostCardProps.title})).toBeInTheDocument();
        expect(screen.getByText(PostCardProps.body)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard { ...PostCardProps } />);
        expect(container.firstChild).toMatchSnapshot();
    });
});  