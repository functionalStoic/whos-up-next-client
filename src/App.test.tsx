import React from 'react';
import { cleanup, render, findAllByText } from 'react-testing-library';
import App from './App';

test('renders without crashing', async () => {
  const { findAllByText } = render(<App />);
  const Header = await findAllByText(/Who's Up Next/);

  expect(Header).toHaveLength(1);
});
