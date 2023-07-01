import { Album } from "./UserView";
import styles from '../../styles/user/AlbumListItem.module.css'

type Props = {
    album: Album
};

const AlbumListItem: React.FC<Props> = ({album}) => {
    return (
        <div className={styles.container}>
            <p>{album.title}</p>
        </div>
    )
}

export default AlbumListItem;