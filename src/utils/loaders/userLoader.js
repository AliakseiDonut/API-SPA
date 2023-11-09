export const userLoader = async ({ params: { id } }) => {
    const userPromise = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json());

    const userAlbumsPromise = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(r => r.json()); 
    
    return { userPromise, userAlbumsPromise };
}