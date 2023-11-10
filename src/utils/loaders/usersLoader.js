export const usersLoader = () => {
  const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .catch(e => console.log(e))
  return { usersPromise };
}