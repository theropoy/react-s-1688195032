import AlbumListItem from "./AlbumListItem";
import { Album } from "./UserView";

type Props = {
    albums: Album[]
}
const AlbumList: React.FC<Props> = ({albums}) => {
    return (
        <div>
            {albums.map((album) => <AlbumListItem key={album.id} album={album}/>)}
        </div>
    )
};

export default AlbumList;