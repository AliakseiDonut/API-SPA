import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import { useFetch } from "../../useFetch";

function Users() {
  const link = 'https://jsonplaceholder.typicode.com/users';
  
  const users = useFetch(link);

  return (
    <div className={classes.users}>
      {users.map(el=><NavLink className={classes.link} to={`/users/${el.id}`}>{el.name}</NavLink>)}
    </div>
  );
}

export default Users;
