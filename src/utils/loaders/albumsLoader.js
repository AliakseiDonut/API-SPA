export const albumsLoader = () => {
  const albumsPromise = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(r => {
      if(!r.ok){
          throw new Error()
      } 
      return r.json()
    })
  return { albumsPromise };
}