import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./routes/Users/Users";
import Layout from "./routes/Layout/Layout";
import Albums from "./routes/Albums/Albums";

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
