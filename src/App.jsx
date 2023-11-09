import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users  from "./routes/Users/Users";
import Layout from "./routes/Layout/Layout";
import Albums from "./routes/Albums/Albums";
import User from "./routes/User/User";
import Album from "./routes/Album/Album";
import NotFound from "./routes/NotFound/NotFound";
import { usersLoader } from "./utils/loaders/usersLoader"
import { albumsLoader } from "./utils/loaders/albumsLoader"
import { albumLoader } from "./utils/loaders/albumLoader"
import { userLoader } from "./utils/loaders/userLoader"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Users />,
        loader: usersLoader
      },
      {
        path: '/albums',
        element: <Albums />,
        loader: albumsLoader
      },
      {
        path: '/users/:id',
        element: <User />,
        loader: userLoader
      },
      {
        path: '/albums/:id',
        element: <Album />,
        loader: albumLoader
      }
    ]
  },
  
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
