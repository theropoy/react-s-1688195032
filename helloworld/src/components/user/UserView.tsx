import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumList from "./AlbumList";
import { json } from "body-parser";

export type Album = {
    userId: number,
    id: number,
    title: string
};

const fetchAlbums = (userId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(response => response.json());
};

const fetchUser = (userId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json());
}

const UserView = ({}) => {
    const {id} = useParams();

    const [albums, setAlbums] = useState<Album[]>([]);
    const [user, setUser] = useState({name: '', username: ''});

    useEffect(() => {
        fetchAlbums(Number(id))
        .then((json) => {
            setAlbums(json);
        });

        fetchUser(Number(id))
        .then((json) => {
            setUser({name: json.name, username: json.username})
        })
    }, [])

    return (
        <main>
            <h1>{user.name + ' - ' + user.username}</h1>
            <AlbumList albums={albums} />
        </main>
    )
}

export default UserView;