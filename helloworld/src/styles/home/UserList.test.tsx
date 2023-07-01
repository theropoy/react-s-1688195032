import UserList from "../../components/home/UserList";

test('Test if all users in list rendered', async () => {
    const {container} = render(<UserList users={}/>);
  
    waitFor(async () => {
      const userList = container.getElementsByClassName('userlist')[0];
      const testData = await fetch('https://jsonplaceholder.typicode.com/users').then((json) => json.length);
      const shouldBeLength = testData
      console.log(userList)
      expect(userList.children.length).toEqual(0);
    })
    
  });