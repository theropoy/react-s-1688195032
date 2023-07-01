import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type User = {
  id: number,
  name: string,
  username: string,
  address: {street: string, suite: string, city: string, zipcode: string}
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  //fetch users on load
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const userList: User[] = json.map((user: any) => ({id: user.id, name: user.id, username: user.username, address: user.address}));
        setUsers(userList);
      })
  }, [])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
