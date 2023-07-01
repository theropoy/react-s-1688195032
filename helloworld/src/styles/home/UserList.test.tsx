import { render, waitFor } from "@testing-library/react";
import UserList from "../../components/home/UserList";
import { User } from "../../utils/types";

test('Test if all users in list rendered', async () => {
    const testData = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

    const userList: User[] = testData.map((user: any) => ({id: user.id, name: user.name, username: user.username, address: user.address}));
    const shouldBeLength = userList.length;


    const {container} = render(<UserList users={userList} />);

    let childrenAmount = 0
    await waitFor(() => {
        childrenAmount = container.children[0].children.length;
    })
    
    expect(childrenAmount).toEqual(shouldBeLength);
  });