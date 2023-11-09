export const albumLoader = async ({ params: { id } }) => {
    const albumPromise = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(r => r.json()) 
    
    const userPromise = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(r => r.json())
        .then(album => fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`))
        .then(r => r.json());
    
    const photosPromise = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(r => r.json()); 
    
    return { albumPromise, userPromise, photosPromise };
}