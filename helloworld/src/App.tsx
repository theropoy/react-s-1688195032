import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './utils/types';
import UserList from './components/home/UserList';


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
      <UserList users={users}/>
    </div>
  );
}

export default App;
