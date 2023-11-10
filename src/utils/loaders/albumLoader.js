import { defer } from "react-router-dom";

export const albumLoader = ({ params: { id } }) => {
    const albumPromise = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`) 
        .then(r => r.json())
        .catch(e => console.log(e))


    const userPromise = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(r => r.json())
        .then(album => fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`))
        .then(r => r.json())
        .catch(e => console.log(e))
    
    const photosPromise = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(r => r.json())
        .catch(e => console.log(e)) 
    
    return defer({ albumPromise, userPromise, photosPromise });
}