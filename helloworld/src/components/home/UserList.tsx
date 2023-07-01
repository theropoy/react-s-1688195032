import { User } from "../../utils/types";
import UserListItem from "./UserListItem";

type Props = {
    users: User[]
}

const UserList: React.FC<Props> = ({users}) => {
    return (
        <div>
            { users.map(user => <UserListItem key={user.id} user={user}/>)}
        </div>
    )
}

export default UserList;