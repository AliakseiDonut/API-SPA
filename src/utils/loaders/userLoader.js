export const userLoader = ({ params: { id } }) => {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => {
            if(!r.ok){
                throw new Error()
            } 
            return r.json()
        })
    const userAlbumsPromise = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(r => { 
            if(!r.ok){
                throw new Error()
            } 
            return r.json()
        })
    
    return { userPromise, userAlbumsPromise };
}