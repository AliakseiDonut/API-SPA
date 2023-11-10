import { Await, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./User.module.css";
import { Suspense } from "react";

function User() {
    const { userPromise, userAlbumsPromise } = useLoaderData();

    return (
        <div className={classes.user}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={userPromise}>
                    {(user) => (
                        <div>    
                            <h2>{user.name}</h2>
            
                            <ul className={classes.userInfo}>
                                <li>Username: {user.username}</li>
                                <li>Email: {user.email}</li>
                                <li>Phone: {user.phone}</li>
                                <li>Site: {user.website}</li>
                            </ul>
                        </div>    
                    )}
                </Await>

                <h2>Albums</h2>

                <Await resolve = {userAlbumsPromise}>
                    {(albums) => (
                        <ul className={classes.albums}>
                          {albums.map(el =>
                            <li>
                              <Link className={classes.link} to={`/albums/${el.id}`}>
                                {el.title}
                              </Link>
                            </li>
                          )}
                        </ul>
                    )}  
                </Await>
            </Suspense>                
        </div>
    );
}

export default User;