import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumList from "./AlbumList";

export type Album = {
    userId: number,
    id: number,
    title: 'string'
};

const fetchAlbums = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
};

const User = ({}) => {
    const {id} = useParams();

    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetchAlbums()
        .then((json) => {
            setAlbums(albums);
        });
    }, [])

    return (
        <main>
            <AlbumList albums={albums} />
        </main>
    )
}

export default User;