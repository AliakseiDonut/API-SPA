import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { NavLink } from "react-router-dom";
import classes from "./User.module.css";

function User() {
    const {id} = useParams();
    
    const userLink = `https://jsonplaceholder.typicode.com/users/${id}`;
    const albumsLink = `https://jsonplaceholder.typicode.com/albums`; 

    const user = useFetch(userLink);
    const albums = useFetch(albumsLink);

    return (
        <div className={classes.user}>
            <h2>{user.name}</h2>
            
            <ul className={classes.userInfo}>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Site: {user.website}</li>
            </ul>

            <h2>Albums</h2>

            {albums.filter(el=>el.userId === +id).map(el=><li><NavLink className={classes.link} to={`/albums/${el.id}`}>{el.title}</NavLink></li>)}
        </div>
    );
}

export default User;