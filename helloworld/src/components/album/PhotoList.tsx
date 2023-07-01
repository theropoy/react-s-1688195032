import PhotoListItem from "./PhotoListItem";
import { Photo } from "./AlbumView";

type Props = {
    photos: Photo[]
}
const PhotoList: React.FC<Props> = ({photos}) => {
    return (
        <div>
            {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo}/>)}
        </div>
    )
};

export default PhotoList;