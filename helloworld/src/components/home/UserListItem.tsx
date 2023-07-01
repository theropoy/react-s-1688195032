import { User } from "../../utils/types"
import styles from '../../styles/home/UserListItem.module.css'
import { Link } from "react-router-dom"

type Props = {
    user: User
}

// Is an item of the user list in home
const UserListItem: React.FC<Props> = ({user}) => {

    return (
        <Link className={styles.container} to={'/user/' + user.id}>
            <p className="useritem__id">{user.id}</p>
            <p className="useritem__name">{user.name}</p>
            <p className="useritem__username">{user.username}</p>
            <ul>
                <li className="useritem__street">{user.address.street}</li>
                <li className="useritem__suite">{user.address.suite}</li>
                <li className="useritem__city">{user.address.city}</li>
                <li className="useritem__zipcode">{user.address.zipcode}</li>
            </ul>
        </Link>
    )
}

export default UserListItem;