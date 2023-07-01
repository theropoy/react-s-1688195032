import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App, { fetchUsers } from './App';

test('Test if fetched user data is the right one', async () => {
  const data = await fetchUsers();
  const testData = await fetch('https://jsonplaceholder.typicode.com/users')

  .then(response => response.json());
  expect(data).toEqual(testData);
});

test('User list gets rendered', () => {
  const {container} = render(<App />);
  const userList = container.getElementsByClassName('userlist');
  expect(userList).not.toEqual(null);
});
