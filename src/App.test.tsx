import React from 'react';
import { cleanup, render } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

test('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
