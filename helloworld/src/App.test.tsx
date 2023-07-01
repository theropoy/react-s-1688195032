import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { fetchUsers } from './App';

test('Fetched user data is the right one', async () => {
  const data = await fetchUsers();
  const testData = await fetch('https://jsonplaceholder.typicode.com/users')
  
  .then(response => response.json());
  expect(data).toEqual(testData);
});
