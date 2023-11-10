import { Link, useLoaderData, Await } from "react-router-dom";
import classes from "./Album.module.css";
import { Suspense } from "react";

function Album() {    
    const { albumPromise, userPromise, photosPromise } = useLoaderData();

    return (
        <div className={classes.album}>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve = {albumPromise}> 
                    {
                        (album) => <h2>{album.title}</h2>
                    }
                </Await>
                
                <Await resolve={userPromise}>
                    {
                        (user) => <span>Created by: <Link className={classes.link} to={`/users/${user.id}`}>{user.name}</Link></span>
                    }
                </Await>
                
                <Await resolve = {photosPromise}> 
                    {(photos) => (
                        <div className={classes.photos}>
                            {photos.map(el=><img src={el.url} alt="" />)}
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default Album;