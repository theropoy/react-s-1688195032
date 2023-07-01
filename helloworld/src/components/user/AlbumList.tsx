import AlbumListItem from "./AlbumListItem";
import { Album } from "./UserView";
import styles from '../../styles/user/AlbumList.module.css'

type Props = {
    albums: Album[]
}
const AlbumList: React.FC<Props> = ({albums}) => {
    return (
        <div className={styles.container}>
            {albums.map((album) => <AlbumListItem key={album.id} album={album}/>)}
        </div>
    )
};

export default AlbumList;