import { Link, useLoaderData, Await } from "react-router-dom";
import classes from "./Users.module.css";
import { Suspense } from "react";

function Users() {
  const  { usersPromise } = useLoaderData();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve = {usersPromise}>
        {(users) => (
            <div className={classes.users}>
              {users.map(el =>
                <Link className={classes.link} to={`/users/${el.id}`}>
                  {el.name}
                </Link>
                )}
            </div>
          )}
      </Await>
    </Suspense>
  );
}

export default Users;