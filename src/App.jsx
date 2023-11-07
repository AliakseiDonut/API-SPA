import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./routes/Users/Users";
import Layout from "./routes/Layout/Layout";
import Albums from "./routes/Albums/Albums";
import User from "./routes/User/User";
import Album from "./routes/Album/Album";
import NotFound from "./routes/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Users />
      },
      {
        path: '/albums',
        element: <Albums />
      },
      {
        path: '/users/:id',
        element: <User />
      },
      {
        path: '/albums/:id',
        element: <Album />
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
