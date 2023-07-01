import AlbumListItem from "./AlbumListItem";
import { Album } from "./User";

type Props = {
    albums: Album[]
}
const AlbumList: React.FC<Props> = ({albums}) => {
    return (
        <div>
            {albums.map((album) => <AlbumListItem album={album}/>)}
        </div>
    )
};

export default AlbumList;