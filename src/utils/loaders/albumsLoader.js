export const albumsLoader = () => {
  const albumsPromise = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(r => r.json())
    .catch(e => console.log(e))
  return { albumsPromise };
}