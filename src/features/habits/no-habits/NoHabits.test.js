import { render, screen } from '@testing-library/react';

import NoHabits from './NoHabits';

it('renders without crashing', () => {
  render(<NoHabits />);

  expect(screen.getByText('No habits')).toBeInTheDocument();
});
