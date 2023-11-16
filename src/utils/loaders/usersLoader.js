export const usersLoader = () => {
  const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => {
      if(!r.ok){
          throw new Error()
      } 
      return r.json()
    })
  return { usersPromise };
}