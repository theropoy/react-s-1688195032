import PhotoListItem from "./PhotoListItem";
import { Photo } from "./AlbumView";
import styles from '../../styles/album/PhotoList.module.css'

type Props = {
    photos: Photo[]
}
const PhotoList: React.FC<Props> = ({photos}) => {
    return (
        <div className={styles.container}>
            {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo}/>)}
        </div>
    )
};

export default PhotoList;