import { NavLink } from "react-router-dom";
import classes from "./Albums.module.css";
import { useFetch } from "../../useFetch";

function Albums() {
  const link = 'https://jsonplaceholder.typicode.com/albums';
  
  const albums = useFetch(link);
  
  return (
    <ul className={classes.albums}>
      {albums.map(el=><li><NavLink className={classes.link} to={`/albums/${el.id}`}>{el.title}</NavLink></li>)}
    </ul>
  );
}

export default Albums;
  