export const albumsLoader = async () => {
    const albumsPromise = await fetch('https://jsonplaceholder.typicode.com/albums')
    .then(r => r.json())
    return { albumsPromise };
  }