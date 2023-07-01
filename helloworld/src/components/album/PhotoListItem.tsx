import { Photo } from "./AlbumView";

type Props = {
    photo: Photo
};

const PhotoListItem: React.FC<Props> = ({photo}) => {

    return (
        <div>
            <img src={photo.url} />
            <p>{photo.title}</p>
        </div>
    )
}

export default PhotoListItem;