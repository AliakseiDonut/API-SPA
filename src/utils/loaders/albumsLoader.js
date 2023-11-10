export const albumsLoader = async () => {
    const albumsPromise = fetch('https://jsonplaceholder.typicode.com/albums')
      .then(r => r.json())
    return { albumsPromise };
  }