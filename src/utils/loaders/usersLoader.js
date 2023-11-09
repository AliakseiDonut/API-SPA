export const usersLoader = async () => {
  const usersPromise = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json());
  return { usersPromise };
}