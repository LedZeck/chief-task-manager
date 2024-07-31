import { render, screen } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar/>', () => {
  it('should render the app name', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/Chief Task Manager/i);
    expect(linkElement).toBeInTheDocument();
  });
});
