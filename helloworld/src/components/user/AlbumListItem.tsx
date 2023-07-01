import { Album } from "./UserView";
import styles from '../../styles/user/AlbumListItem.module.css'
import { Link } from "react-router-dom";

type Props = {
    album: Album
};

const AlbumListItem: React.FC<Props> = ({album}) => {
    return (
        <Link to={'/album/' + album.id}>
        <div className={styles.container}>
            <p>{album.title}</p>
        </div>
        </Link>
    )
}

export default AlbumListItem;