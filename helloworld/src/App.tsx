import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './utils/types';
import UserList from './components/home/UserList';

export const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json());
}

function App() {

  // stores the mapped user data
  const [users, setUsers] = React.useState<User[]>([]);

  //fetch users on load
  useEffect(() => {
    fetchUsers()
    .then((json) => {
      const userList: User[] = json.map((user: any) => ({id: user.id, name: user.name, username: user.username, address: user.address}));
      setUsers(userList);
    });
  }, [])


  return (
    <main className="App">
      <UserList users={users}/>
    </main>
  );
}

export default App;
