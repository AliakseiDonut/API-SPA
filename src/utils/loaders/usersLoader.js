export const usersLoader = async () => {
  const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json());
  return { usersPromise };
}