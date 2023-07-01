import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumList from "./AlbumList";

export type Album = {
    userId: number,
    id: number,
    title: string
};

const fetchAlbums = (userId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(response => response.json());
};

const UserView = ({}) => {
    const {id} = useParams();

    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetchAlbums(Number(id))
        .then((json) => {
            setAlbums(json);
        });
    }, [])

    return (
        <main>
            <AlbumList albums={albums} />
        </main>
    )
}

export default UserView;