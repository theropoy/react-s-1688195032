import { Album } from "./User";

type Props = {
    album: Album
};

const AlbumListItem: React.FC<Props> = ({album}) => {
    return (
        <div>
            <p>{album.title}</p>
        </div>
    )
}

export default AlbumListItem;