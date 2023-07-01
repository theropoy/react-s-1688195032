import { render, waitFor } from "@testing-library/react"
import UserListItem from "./UserListItem"
import { User } from "../../utils/types";

test('UserListItem gets properly rendered', async () => {
    const userData: User = {
        id: 0,
        name: '1',
        username: '2',
        address: {
            street: '3',
            suite: '4',
            city: '5',
            zipcode: '6'

        }
    };
    const {container} = render(<UserListItem user={userData}/>)

    let renderedData: User;

    await waitFor(() => {
        const id =  container.querySelector('.useritem__id'),
        name = container.querySelector('.useritem__name'),
        username = container.querySelector('.useritem__username'),
        street= container.querySelector('.useritem__street'),
        suite = container.querySelector('.useritem__suite'),
        city = container.querySelector('.useritem__city'),
        zipcode = container.querySelector('.useritem__zipcode')

  
        renderedData = {
            id:  id? Number(id.innerHTML) : -1,
            name:  name? name.innerHTML  : '',
            username: username? username.innerHTML : '',
            address: {
                street: street? street.innerHTML : '',
                suite: suite? suite.innerHTML : '',
                city: city? city.innerHTML : '',
                zipcode: zipcode? zipcode.innerHTML : '',

            }
        }
        expect(renderedData).toEqual(userData);
    })
     

});