import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('Hero', () => {
  it('renders Hero component', () => {
    render(<Hero />);
    const hero = screen.getByTestId('hero');
    const description = screen.getByText(
      'A simple task manager to keep you organized.'
    );
    const title = screen.getByText('Chief Task Manager');

    expect(hero).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
