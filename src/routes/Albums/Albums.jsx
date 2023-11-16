import { Link, useLoaderData, Await } from "react-router-dom";
import classes from "./Albums.module.css";
import { Suspense } from "react";

function Albums() {
  const { albumsPromise } = useLoaderData();
  
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve = {albumsPromise}>
        {(albums) => (
            <ul className={classes.albums}>
              {albums.map(el =>
                <li>
                  <Link key={el.id} className={classes.link} to={`/albums/${el.id}`}>
                    {el.title}
                  </Link>
                </li>
              )}
            </ul>
          )}  
      </Await>
    </Suspense>
  );
}

export default Albums;
  