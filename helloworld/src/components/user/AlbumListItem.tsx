import { Album } from "./UserView";
import styles from '../../styles/user/AlbumListItem.module.css'
import { Link } from "react-router-dom";

type Props = {
    album: Album
};

const AlbumListItem: React.FC<Props> = ({album}) => {
    return (
        <Link className={styles.container} to={'/album/' + album.id}>
            <div className={styles.imagePlaceholder}></div>
            <p>{album.title}</p>
        </Link>
    )
}

export default AlbumListItem;