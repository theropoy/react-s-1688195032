import { User } from "../../utils/types";
import UserListItem from "./UserListItem";
import styles from '../../styles/home/UserList.module.css'

type Props = {
    users: User[]
}

// Lists all user items in home
const UserList: React.FC<Props> = ({users}) => {
    return (
        <div className={styles.container}>
            { users.map(user => <UserListItem key={user.id} user={user}/>)}
        </div>
    )
}

export default UserList;