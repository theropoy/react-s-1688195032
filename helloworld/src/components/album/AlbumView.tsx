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

const AlbumView = ({}) => {
    const {id} = useParams();

    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetchPhotos(Number(id))
        .then((json) => {
            setPhotos(json);
        });
    }, [])

    return (
        <main>
            <PhotoList photos={photos}/>
        </main>
    )
}

export default AlbumView;