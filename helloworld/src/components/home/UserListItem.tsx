import { User } from "../../utils/types"
import styles from '../../styles/home/UserListItem.module.css'

type Props = {
    user: User
}

const UserListItem: React.FC<Props> = ({user}) => {

    return (
        <div className={styles.container}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <ul>
                <li>{user.address.street}</li>
                <li>{user.address.suite}</li>
                <li>{user.address.street}</li>
                <li>{user.address.zipcode}</li>
            </ul>
        </div>
    )
}

export default UserListItem;