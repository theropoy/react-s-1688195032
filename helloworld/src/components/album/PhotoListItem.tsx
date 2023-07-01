import { Photo } from "./AlbumView";
import styles from '../../styles/album/PhotoListItem.module.css'

type Props = {
    photo: Photo
};

const PhotoListItem: React.FC<Props> = ({photo}) => {

    return (
        <div className={styles.container}>
            <img src={photo.url} />
            <p>{photo.title}</p>
        </div>
    )
}

export default PhotoListItem;