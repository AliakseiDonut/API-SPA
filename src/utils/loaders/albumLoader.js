import { defer } from "react-router-dom";

export const albumLoader = ({ params: { id } }) => {
    const albumPromise = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`) 
        .then(r => r.json());


    const userPromise = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(r => r.json())
        .then(album => fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`))
        .then(r => r.json());
    
    const photosPromise = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(r => r.json()); 
    
    return defer({ albumPromise, userPromise, photosPromise });
}