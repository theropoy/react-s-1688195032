import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PhotoList from "./PhotoList";

export type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnaiUrl: string
};

const fetchPhotos = (albumId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(response => response.json());
};

const fetchAlbum = (userId: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${userId}`)
    .then(response => response.json());
}

const AlbumView = ({}) => {
    const {id} = useParams();

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [albumTitle, setAlbumTitle] = useState('');

    useEffect(() => {
        fetchPhotos(Number(id))
        .then((json) => {
            setPhotos(json);
        });

        fetchAlbum(Number(id))
        .then((json) => {
            setAlbumTitle(json.title)
        })
    }, [])

    return (
        <main>
            <h1>{albumTitle}</h1>
            <PhotoList photos={photos}/>
        </main>
    )
}

export default AlbumView;