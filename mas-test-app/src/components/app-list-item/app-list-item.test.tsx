import React from 'react';
import { render } from '@testing-library/react';
import AppListItem from './app-list-item';

test('renders learn react link', () => {
  const { getByText } = render(<AppListItem />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
