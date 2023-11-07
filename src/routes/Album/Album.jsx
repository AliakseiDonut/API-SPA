import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { NavLink } from "react-router-dom";
import classes from "./Album.module.css";

function Album() {
    const {id} = useParams();
    
    const photosLink = `https://jsonplaceholder.typicode.com/photos`; 
    const photos = useFetch(photosLink);

    const albumLink = `https://jsonplaceholder.typicode.com/albums/${id}`;
    const album = useFetch(albumLink);

    const userLink = `https://jsonplaceholder.typicode.com/users/${album.userId}`;
    const user = useFetch(userLink);

    return (
        <div className={classes.album}>
            <h2>{album.title}</h2>
            Created by: <NavLink className={classes.link} to={`/users/${album.userId}`}>{user.name}</NavLink>
            <div className={classes.photos}>
                {photos.filter(el=>el.albumId === +id).map(el=><img src={el.url} alt="" />)}
            </div>
        </div>
    );
}

export default Album;