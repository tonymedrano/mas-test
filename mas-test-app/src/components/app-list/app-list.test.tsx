import React from 'react';
import { render } from '@testing-library/react';
import AppList from './app-list';

test('renders learn react link', () => {
  const { getByText } = render(<AppList />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
