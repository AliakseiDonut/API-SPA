export const userLoader = ({ params: { id } }) => {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())
        .catch(e => console.log(e))

    const userAlbumsPromise = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(r => r.json())
        .catch(e => console.log(e))
    
    return { userPromise, userAlbumsPromise };
}